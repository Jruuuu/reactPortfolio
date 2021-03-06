
import "./style.css"

function App() {
  return (
   

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
   
    <a className="navbar-brand" href="index.html">JR</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-link" href="resume.html">RESUME</a>
        
        <a className="nav-link active" href="portfolio.html">PORTFOLIO <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="aboutme.html">ABOUT</a>

      </div>
    </div>
  </nav>

  );
}

export default App;
