#!/usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import treeify from "treeify";
import chalk from "chalk";
import { promisify } from "util";

// Promisify fs functions
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Define directories to include/exclude
const INCLUDE_DIRS = ["src"];
const EXCLUDE_DIRS = ["node_modules", ".git", "dist", "build", "coverage", "public", "static"];

// Function to build the directory tree object
async function buildTree(dirPath) {
  const name = path.basename(dirPath);
  const item = { [name]: {} };
  const files = await readdir(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const fileStat = await stat(fullPath);

    if (fileStat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        item[name][file] = await buildTree(fullPath)[file];
      }
    } else {
      // Filter files by extension if needed
      if (
        [".js", ".jsx", ".ts", ".tsx", ".json", ".html", ".css"].includes(
          path.extname(fullPath)
        )
      ) {
        item[name][file] = "file";
      }
    }
  }

  return item;
}

// Function to get all eligible file paths
async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await readdir(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const fileStat = await stat(fullPath);

    if (fileStat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      if (
        [".js", ".jsx", ".ts", ".tsx", ".html", ".css"].includes(
          path.extname(fullPath)
        )
      ) {
        arrayOfFiles.push(fullPath);
      }
    }
  }

  return arrayOfFiles;
}

// Function to display the directory tree
async function displayTree() {
  const root = process.cwd();
  const tree = await buildTree(root);
  console.log(chalk.green("\nProject Directory Tree:\n"));
  console.log(treeify.asTree(tree, true));
}

// Function to present choices and get user selection
async function promptFileSelection(filePaths) {
  // Transform file paths to relative paths for better readability
  const relativePaths = filePaths.map((file) =>
    path.relative(process.cwd(), file)
  );

  const answers = await inquirer.prompt([
    {
      type: "checkbox",
      name: "selectedFiles",
      message: "Select the files you want to include:",
      choices: relativePaths,
      pageSize: 20,
      validate: function (answer) {
        if (answer.length < 1) {
          return "You must choose at least one file.";
        }
        return true;
      },
    },
  ]);

  return answers.selectedFiles.map((file) => path.join(process.cwd(), file));
}

// Main function
(async () => {
  try {
    await displayTree();

    console.log(
      chalk.blue("\nScanning project directories for eligible files...\n")
    );
    const allFiles = await getAllFiles(process.cwd());

    if (allFiles.length === 0) {
      console.log(chalk.red("No eligible files found to select."));
      return;
    }

    const selectedFiles = await promptFileSelection(allFiles);

    let aggregatedContent = "";

    for (const filePath of selectedFiles) {
      const content = await readFile(filePath, "utf8");
      aggregatedContent += `\n\n// ----- ${path.relative(
        process.cwd(),
        filePath
      )} -----\n\n`;
      aggregatedContent += content;
    }

    const outputPath = path.join(process.cwd(), "aggregated_files.txt");
    await writeFile(outputPath, aggregatedContent, "utf8");

    console.log(chalk.green(`\nAggregated content written to ${outputPath}\n`));
  } catch (error) {
    console.error(chalk.red("An error occurred:"), error);
  }
})();
