import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import "./style.css"

export default function App() {

       
  


  return (
    <div className="App">

      <Nav />
      <div className="Main">
        <Main/>
      </div>
      <div className="About" >
        <About/>
      </div>

      <div className="Portfolio">
      <Portfolio/>
      </div>

      <Footer />
    </div>
  );
};