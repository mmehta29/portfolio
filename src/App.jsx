import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Manya } from "./components/manya/Manya";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Project/Project";

function App() {
  /* we pass a variable in a {} */
  return (
    <div className={styles.App}>
      <Navbar />
      <Manya />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
