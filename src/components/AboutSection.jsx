import './AboutSection.css';
import pradhanImg from '../assets/pradhan.jpg';
import upaPradhanImg from '../assets/upa-pradhan.jpg';
import sachivImg from '../assets/sachiv.jpg';

function AboutSection() {
  return (
    <div className="about-section">

      {/* LEFT COLUMN: About + Glance */}
      <div className="about-left">
        <div className="about-village">
          <h2>ABOUT VILLAGE</h2>
          <p>
            Phulera, in Panchayat, is a fictional village set in Uttar Pradesh where
            Abhishek Tripathi works as the Panchayat Secretary, dealing with
            everyday rural issues like water problems, power cuts, dowry, and
            village politics, alongside characters like Pradhan Manju Devi,
            Pradhan-pati Brij Bhushan Dubey, Vikas, Prahlad, and Rinki. The village
            reflects a simple yet relatable North Indian rural life filled with humor,
            challenges, and heartwarming moments.
          </p>

          {/* Glowing Main CTA */}
          <button className="btn glow">Explore Phulera</button>
        </div>

        <div className="village-glance">
          <h3>VILLAGE AT A GLANCE</h3>
          <ul>
            <li><strong>Area:</strong> 46 sq km</li>
            <li><strong>Population:</strong> 1304</li>
            <li><strong>Language:</strong> Hindi</li>
            <li><strong>Literacy:</strong> 40%</li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN: Panchayat Members */}
      <div className="about-right">
        <h3>PANCHAYAT MEMBERS</h3>
        <div className="member-card">
          <img src={pradhanImg} alt="Pradhan" />
          <p><strong>PRADHAN</strong></p>
        </div>
        <div className="member-card">
          <img src={upaPradhanImg} alt="Upa Pradhan" />
          <p><strong>UPA PRADHAN</strong></p>
        </div>
        <div className="member-card">
          <img src={sachivImg} alt="Sachiv" />
          <p><strong>SACHIV</strong></p>
        </div>
      </div>

    </div>
  );
}

export default AboutSection;
