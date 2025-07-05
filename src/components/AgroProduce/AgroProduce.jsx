import './AgroProduce.css';
import ProductCard from './ProductCard';

import wheat from '../../assets/agro/wheat.jpg';
import corn from '../../assets/agro/corn.jpg';
import gourd from '../../assets/agro/bottle-gourd.jpg';

const agroProducts = [
  {
    name: 'Wheat',
    image: wheat,
    total: '5 Tons',
    duration: '4 Months',
    price: '₹18,000 / Ton',
  },
  {
    name: 'Corn',
    image: corn,
    total: '3 Tons',
    duration: '3 Months',
    price: '₹15,000 / Ton',
  },
  {
    name: 'Bottle Gourd',
    image: gourd,
    total: '1.5 Tons',
    duration: '2 Months',
    price: '₹12,000 / Ton',
  },
];

function AgroProduce() {
  return (
    <div className="agro-section">
      <div className="agro-container">
        <h2>AGRICULTURAL PRODUCE</h2>
        <div className="agro-grid">
          {agroProducts.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgroProduce;
