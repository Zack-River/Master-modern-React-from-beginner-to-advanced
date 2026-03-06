export function Logo({ image, title }) {
  return (
    <div className="logo">
      <span role="img">{image}</span>
      <h1>{title}</h1>
    </div>
  );
}
