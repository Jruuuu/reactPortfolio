import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "./style.css"

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="WelcomeScreen">
        <Main/>
      </div>
      <div className="About">
        <About/>
      </div>

      <Footer />
    </div>
  );
};