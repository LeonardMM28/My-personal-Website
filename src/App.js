import React from "react";
import "./assets/styles.css"; // Import your old styles here
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Accomplishments from "./components/Accomplishments";

function App() {
  React.useEffect(() => {
    alert(
      "Hi there! I am Leonardo Meza and thanks for visiting my personal website, nevertheless I am still working on it, hence I apologize if you cannot find too much info yet, you might wanna come back another time to check for updates!! Have a nice day! :)"
    );
  }, []);

  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <Accomplishments />
    </div>
  );
}

export default App;
