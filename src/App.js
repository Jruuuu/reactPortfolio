import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import "./style.css"
import React, {useRef} from "react";

export default function App() {

        const aboutMe = useRef(null)

  


  return (
    <div className="App">

      <Nav />
      <div className="WelcomeScreen">
        <Main
        about={aboutMe}
        
        
        />
      </div>
      <div className="About" ref={aboutMe}>
        <About />
      </div>

      <div className="Portfolio">
      <Portfolio/>
      </div>

      <Footer />
    </div>
  );
};