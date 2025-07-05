import './Footer.css';
import digitalLogo from '../../assets/digital-india.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-links">
          <li><a href="#">Website Policies</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
        <img src={digitalLogo} alt="Digital India" className="footer-logo" />
      </div>

      <div className="footer-bottom">
        <p>
          Content Owned by District Administration Phulera Village,<br />
          Developed and hosted by National Informatics Centre,<br />
          Ministry of Electronics & IT, Government of India.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
