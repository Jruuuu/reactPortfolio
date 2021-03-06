import "react-bootstrap";
import "./style.css"

const gitHubIcon = "../../assets/images/GitHub-Mark-Light-32px.png"



function App() {
  return (
    <footer className="footer text-center fixed-bottom mt-auto">
      <div className="mt-1 navbar-dark bg-light">
        <footer className="footer-copyright my-auto">  Copyright


          <a
            className="navbar-brand"
            href="https://github.com/Jruuuu"
            target="_blank"
            rel="noopener"
          >

          <img
            src={gitHubIcon}
            alt="github icon"
            loading="lazy"
            ></img>
            </a>
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/enrilo-ugalde"
            target="_blank"
            rel="noopener"
          >

          <img
            src="../assets/images/LI-In-Bug.png"
            alt="linkedin icon"
            loading="lazy"
            ></img>
            </a>
          <a
            className="navbar-brand"
            href="https://www.instagram.com/jruuuu"
            target="_blank"
            rel="noopener"
          >
            {" "}
          <img
            src="../assets/images/Instagram.png"
            alt="instagram icon"
            loading="lazy"
            ></img>
            </a>
        </footer>
      </div>
    </footer>
  );
}

export default App;
