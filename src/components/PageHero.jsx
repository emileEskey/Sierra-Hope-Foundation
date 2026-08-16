import { Link } from 'react-router-dom';
import './PageHero.css';

/**
 * Reusable hero/header block used at the top of every inner page.
 * Keeps the breadcrumb + eyebrow + title rhythm consistent site-wide.
 */
export default function PageHero({ kicker, title, description, crumb, image, imageAlt }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__row">
        <div className="page-hero__copy">
          <p className="page-kicker">
            <Link to="/">Home</Link> / {crumb}
          </p>
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>{kicker}</span>
          <h1>{title}</h1>
          {description && <p className="page-hero__desc">{description}</p>}
        </div>
        {image && (
          <div className="page-hero__image">
            <img src={image} alt={imageAlt || ''} loading="eager" />
          </div>
        )}
      </div>
    </section>
  );
}
