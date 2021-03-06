
import"./style.css";


export default function Main(props) {
    // const aboutme = props.about;

//   const goToSection = ()=> window.scrollTo({top: aboutme.current.offsetTop, behavior:"smooth" })
// console.log(props)
    return (
      
        <div className="container welcome">
        <h2>
          Hello! I'm<span>JR,</span>
        </h2>
        <span className="text2">Take a Look Around</span>
        <br />
        <div className="dropdown">
          <button className="dropbtn" aria-label="Drop Down Button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-eyeglasses"
              viewBox="0 0 16 16"
              >
              <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
            <div className="dropdown-content">
              <a href={props.about}>ABOUT ME </a>
              <a href="portfolio.html">PORTFOLIO</a>
              <a href="resume.html">RESUME</a>
            </div>
          </button>
        </div>
        </div>

     
       
    );
};