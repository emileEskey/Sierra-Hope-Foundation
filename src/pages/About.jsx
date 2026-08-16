import PageHero from '../components/PageHero';
import FeatureCard from '../components/FeatureCard';
import CTABand from '../components/CTABand';
import GaraDivider from '../components/GaraDivider';
import './About.css';

const VALUES = [
  { title: 'Community First', body: 'Every program starts with a chiefdom-level needs conversation, not a head-office plan.' },
  { title: 'Transparency', body: 'District budgets and outcomes are published each quarter for anyone to review.' },
  { title: 'Local Leadership', body: 'Programs are run by Sierra Leonean staff and volunteers who live in the districts we serve.' },
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        kicker="Who We Are"
        title="Built in Sierra Leone, for Sierra Leone."
        description="Sierra Hope Foundation is a community-based organisation working across the Western Area, Bo, and Kono districts."
        image="https://picsum.photos/seed/sh-about-hero/700/560"
        imageAlt="Sierra Hope Foundation field team meeting with a village council"
      />

      {/* Story / content section */}
      <section className="section section--paper">
        <div className="container about-story">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>From one clinic in Waterloo to nine districts.</h2>
            <p>
              Sierra Hope Foundation began in 2014 as a volunteer health outreach run out of a
              single clinic in Waterloo. Founders Aminata Kargbo and Ibrahim Sesay noticed that
              families were walking hours for basic care, and started organising monthly mobile
              health days with a handful of nursing students.
            </p>
            <p>
              A decade on, that outreach has grown into a full community-development
              organisation, still guided by the same principle: ask the community what it
              needs, then build the program around the answer.
            </p>
          </div>
          <img
            src="https://picsum.photos/seed/sh-about-story/560/460"
            alt="Sierra Hope Foundation volunteers at an early outreach day"
            className="about-story__img"
          />
        </div>
      </section>

      <GaraDivider />

      {/* Vision / mission section */}
      <section className="section section--paper">
        <div className="container">
          <div className="about-pillars">
            <div className="about-pillar">
              <span className="eyebrow">Our Mission</span>
              <p>To strengthen health, education, and livelihoods in Sierra Leonean communities through programs designed with the people they serve.</p>
            </div>
            <div className="about-pillar">
              <span className="eyebrow">Our Vision</span>
              <p>A Sierra Leone where every community has the resources and voice to shape its own future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / features section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What Guides Us</span>
            <h2>Our values</h2>
          </div>
          <div className="feature-grid feature-grid--three">
            {VALUES.map((v, i) => (
              <FeatureCard key={v.title} index={String(i + 1).padStart(2, '0')} title={v.title}>
                {v.body}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Join Us"
        title="Be part of the next decade of community-led work."
        secondaryLabel="Meet Our Programs"
        secondaryTo="/programs"
      />
    </>
  );
}
