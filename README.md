DIR TREE:
 tree -I "node_modules|build" > dir-tree.txt

 FILES: 
 npm run aggregate-files

STEPS;
1.Build
2.Move all files from build to root folder and replace old
3.Push

COMMAND FOR PERMISSIONS.
sudo chown -R $USER /Users/leonardomm/Desktop/My-personal-Website
