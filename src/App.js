/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
/*import Particles from "react-particles-js";
import tsparticles from "tsparticles";*/

function App() {
  return (
    <>

      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
    </>

  );
}

export default App;
