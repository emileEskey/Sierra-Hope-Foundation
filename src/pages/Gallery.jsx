import { useState } from 'react';
import PageHero from '../components/PageHero';
import StatStrip from '../components/StatStrip';
import CTABand from '../components/CTABand';
import GaraDivider from '../components/GaraDivider';
import './Gallery.css';
import clinic from '../assets/clinic.jpg';
import scholarship from '../assets/scholarship.jpg';
import tailoring from '../assets/tailoring.jpg';
import borehole from '../assets/borehole.jpg';
import event from '../assets/event.png';
import mentorship from '../assets/mentorship.jpg';
import agro from '../assets/agro.jpg';
import hygiene from '../assets/hygiene.jpg';
import vaccination from '../assets/vaccination.jpg';
import all from '../assets/all.jpg';

const CATEGORIES = ['All', 'Health', 'Education', 'Livelihoods', 'Water'];

const IMAGES = [
{ seed: 'sh-gal-01', cat: 'Health', caption: 'Mobile clinic day in Koidu', image: clinic },
{ seed: 'sh-gal-02', cat: 'Education', caption: 'Scholarship cohort orientation', image: scholarship },
{ seed: 'sh-gal-03', cat: 'Livelihoods', caption: 'Tailoring workshop graduates', image: tailoring },
{ seed: 'sh-gal-04', cat: 'Water', caption: 'New borehole handover in Bo', image: borehole },
{ seed: 'sh-gal-05', cat: 'Health', caption: 'Community health worker training', image: event },
{ seed: 'sh-gal-06', cat: 'Education', caption: 'Mentorship circle, Freetown', image: mentorship },
{ seed: 'sh-gal-07', cat: 'Livelihoods', caption: 'Agro-processing cooperative', image: agro },
{ seed: 'sh-gal-08', cat: 'Water', caption: 'Hygiene education session', image: hygiene },
{ seed: 'sh-gal-09', cat: 'Health', caption: 'Vaccination outreach day', image: vaccination },
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
        image={all}
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
                <img src={img.image || `https://picsum.photos/seed/${img.seed}/460/460`} alt={img.caption} loading="lazy" />
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
