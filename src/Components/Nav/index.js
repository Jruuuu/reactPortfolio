
import "./style.css"
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

export default function App(){
  return (
   
    // <Nav className="justify-content-end" activeKey="/home">
    // <Nav.Item>
    //   <Nav.Link href="/home">Active</Nav.Link>
    // </Nav.Item>
    // <Nav.Item>
    //   <Nav.Link eventKey="link-1">Link</Nav.Link>
    // </Nav.Item>
    // <Nav.Item>
    //   <Nav.Link eventKey="link-2">Link</Nav.Link>
    // </Nav.Item>
    // </Nav>
   
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
   
    <a className="navbar-brand" href="/">JR</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-link" href="resume">RESUME</a>
        
        <a className="nav-link active" href="portfolio">PORTFOLIO <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="aboutme">ABOUT</a>

      </div>
    </div>
  </nav>

  );
}


