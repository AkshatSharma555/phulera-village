function SchemeItem({ name, url }) {
  return (
    <div className="scheme-item">
      <h4>{name}</h4>
      <a href={url} target="_blank" rel="noreferrer">View Details</a>
    </div>
  );
}

export default SchemeItem;
