import './NavBar.css';
import emblem from '../assets/emblem.png';
import digitalIndia from '../assets/digital-india.png';

function NavBar() {
  return (
    <div className="navbar">

      {/* TOP ROW */}
      <div className="navbar-top">
        <div className="navbar-left">
          <img src={emblem} alt="Emblem" />
          <div className="navbar-title">
            <h2>फुलेरा गाँव</h2>
            <h3>PHULERA VILLAGE</h3>
          </div>
        </div>
        <div className="navbar-right">
          <img src={digitalIndia} alt="Digital India Logo" />
        </div>
      </div>

      {/* MENU LINKS */}
      <ul className="navbar-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">GOVT SCHEMES</a></li>
        <li><a href="#">AGRO PRODUCE</a></li>
        <li><a href="#">TENDERS</a></li>
        <li><a href="#">TOURISM</a></li>
        <li><a href="#"><span className="hamburger">&#9776;</span> More</a></li>
      </ul>

    </div>
  );
}

export default NavBar;
