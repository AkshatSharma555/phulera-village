function ProductCard({ name, image, total, duration, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Total Produce:</strong> {total}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Price:</strong> {price}</p>
      <button>BUY</button>
    </div>
  );
}

export default ProductCard;
