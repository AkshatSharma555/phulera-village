import { useState } from 'react';
import './GovtSchemes.css';
import SchemeItem from './SchemeItem';

const schemesData = [
  { name: 'Pradhan Mantri Awas Yojana', url: 'https://pmaymis.gov.in/' },
  { name: 'Beti Bachao Beti Padhao', url: 'https://wcd.nic.in/bbbp-schemes' },
  { name: 'Ayushman Bharat Yojana', url: 'https://pmjay.gov.in/' },
  { name: 'Pradhan Mantri Fasal Bima Yojana', url: 'https://pmfby.gov.in/' },
  { name: 'Kisan Credit Card Scheme', url: 'https://pmkisan.gov.in/' },
];

function GovtSchemes() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSchemes = schemesData.filter(scheme =>
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="govt-schemes">
      <div className="govt-schemes-container">
        <h2>GOVT SCHEMES</h2>

        <input
          type="text"
          placeholder="Search: Enter Scheme Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="scheme-list">
          {filteredSchemes.map((scheme, index) => (
            <SchemeItem key={index} name={scheme.name} url={scheme.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GovtSchemes;
