import { Link } from 'react-router-dom';
import GaraDivider from './GaraDivider';
import './CTABand.css';

export default function CTABand({
  eyebrow = 'Get Involved',
  title = 'Your support keeps community programs running.',
  description,
  primaryLabel = 'Donate Now',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="cta-band">
      <GaraDivider tone="sand" />
      <div className="container cta-band__inner">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="cta-band__actions">
          <Link to={primaryTo} className="btn btn--ember">{primaryLabel}</Link>
          {secondaryLabel && (
            <Link to={secondaryTo} className="btn btn--outline">{secondaryLabel}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
