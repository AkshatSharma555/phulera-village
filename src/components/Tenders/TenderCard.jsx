function TenderCard({ title, image }) {
  return (
    <div className="tender-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default TenderCard;
