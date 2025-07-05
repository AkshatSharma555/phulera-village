import './Tender.css';
import TenderCard from './TenderCard';

import solar from '../../assets/tenders/solar.jpg';
import road from '../../assets/tenders/road.jpg';

const tenderData = [
  {
    title: 'Installation of Solar Street Lights',
    image: solar,
  },
  {
    title: 'Construction of Cemented Road in Sector 3',
    image: road,
  },
];

function TenderSection() {
  return (
    <div className="tender-section">
      <div className="tender-container">
        <h2>TENDERS</h2>

        <div className="tender-grid">
          {tenderData.map((item, index) => (
            <TenderCard key={index} title={item.title} image={item.image} />
          ))}
        </div>

        <div className="tender-email">
          📩 Send your quotations at: <a href="mailto:xyz@email.com">xyz@email.com</a>
        </div>
      </div>
    </div>
  );
}

export default TenderSection;
