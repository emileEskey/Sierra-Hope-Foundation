import { useState } from 'react';
import PageHero from '../components/PageHero';
import StatStrip from '../components/StatStrip';
import CTABand from '../components/CTABand';
import GaraDivider from '../components/GaraDivider';
import './Gallery.css';

const CATEGORIES = ['All', 'Health', 'Education', 'Livelihoods', 'Water'];

const IMAGES = [
  { seed: 'sh-gal-01', cat: 'Health', caption: 'Mobile clinic day in Koidu' },
  { seed: 'sh-gal-02', cat: 'Education', caption: 'Scholarship cohort orientation' },
  { seed: 'sh-gal-03', cat: 'Livelihoods', caption: 'Tailoring workshop graduates' },
  { seed: 'sh-gal-04', cat: 'Water', caption: 'New borehole handover in Bo' },
  { seed: 'sh-gal-05', cat: 'Health', caption: 'Community health worker training' },
  { seed: 'sh-gal-06', cat: 'Education', caption: 'Mentorship circle, Freetown' },
  { seed: 'sh-gal-07', cat: 'Livelihoods', caption: 'Agro-processing cooperative' },
  { seed: 'sh-gal-08', cat: 'Water', caption: 'Hygiene education session' },
  { seed: 'sh-gal-09', cat: 'Health', caption: 'Vaccination outreach day' },
];

const STATS = [
  { value: '9', label: 'Districts Documented' },
  { value: '1,200+', label: 'Field Photos on File' },
  { value: '2014', label: 'Program Start Year' },
  { value: '4', label: 'Focus Areas' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? IMAGES : IMAGES.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        crumb="Gallery"
        kicker="Moments of Change"
        title="See the impact we make, community by community."
        image="https://picsum.photos/seed/sh-gallery-hero/700/560"
        imageAlt="Sierra Hope Foundation field photography"
      />

      {/* Filter + gallery grid section */}
      <section className="section section--paper">
        <div className="container">
          <div className="gallery-filters" role="tablist" aria-label="Filter gallery by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`gallery-filter ${active === c ? 'is-active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {shown.map((img) => (
              <figure className="gallery-item" key={img.seed}>
                <img src={`https://picsum.photos/seed/${img.seed}/460/460`} alt={img.caption} loading="lazy" />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <GaraDivider />

      {/* Impact stats section */}
      <section className="section section--paper">
        <div className="container">
          <StatStrip stats={STATS} />
        </div>
      </section>

      <CTABand
        eyebrow="Support the Work"
        title="Help us document — and grow — the next chapter."
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
