import './FeatureCard.css';

export default function FeatureCard({ index, title, children }) {
  return (
    <article className="feature-card">
      <span className="feature-card__index">{index}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
