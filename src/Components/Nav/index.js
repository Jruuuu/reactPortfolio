import { Nav } from "react-bootstrap";
import "./style.css"

function App() {
  return (
   

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
   
    <a className="navbar-brand" href="index.html">JR</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <a class="nav-link" href="resume.html">RESUME</a>
        
        <a class="nav-link active" href="portfolio.html">PORTFOLIO <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="aboutme.html">ABOUT</a>

      </div>
    </div>
  </nav>

  );
}

export default App;
