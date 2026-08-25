import PageHero from '../components/PageHero';
import CTABand from '../components/CTABand';
import GaraDivider from '../components/GaraDivider';
import './Programs.css';
import girl from '../assets/girl.jpg';
import skill from '../assets/skill.jpg';
import water from '../assets/water.jpg';
import med from '../assets/med.png';
import event from '../assets/event.png';


const PROGRAMS = [
  {
  title: 'Community Health Outreach',
   body: 'Monthly mobile clinics staffed by trained volunteer nurses, plus a network of community health workers who follow up between visits. In August, 2026, outreach days reached 4 communities; Waterloo, Hastings, Calaba Town and Grafton.',
  seed: 'sh-prog-health',
  image: med,
  },
  {
    title: "Girls' Education Access",
    body: 'Scholarships, school-supply grants, and safe transport arrangements that reduce the barriers keeping girls out of secondary school, paired with a mentorship circle for each cohort.',
    seed: 'sh-prog-education',
    image: girl, 
  },
  {
  title: 'Livelihoods & Skills Training',
  body: 'Six-month vocational courses in tailoring, agro-processing, and small-business bookkeeping, followed by seed grants for graduates who complete a business plan.',
  seed: 'sh-prog-skills',
  image: skill,
  },
  {
  title: 'Clean Water & Sanitation',
  body: 'Borehole construction, well rehabilitation, and hygiene-education sessions run with local water management committees to keep systems maintained long after installation.',
  seed: 'sh-prog-water',
  image: water,
  },
];

const APPROACH = [
  { step: '01', title: 'Listen', body: 'District coordinators hold open chiefdom meetings before any program is designed.' },
  { step: '02', title: 'Co-design', body: 'A community steering group shapes the program scope, timeline, and success measures.' },
  { step: '03', title: 'Deliver & Review', body: 'Programs run in phases, with results shared back to the community each quarter.' },
];

export default function Programs() {
  return (
    <>
      <PageHero
        crumb="Programs"
        kicker="What We Offer"
        title="Programs shaped with the communities we work in."
        description="Four focus areas, each run by district-based teams who know the community by name."
        image={event}
        imageAlt="Sierra Hope Foundation program team in the field"
      />

      {/* Programs list / services section */}
      <section className="section section--paper">
        <div className="container">
          <div className="program-list">
            {PROGRAMS.map((p, i) => (
              <article className="program-row" key={p.title}>
                <img src={p.image || `https://picsum.photos/seed/${p.seed}/440/320`} alt={`${p.title} program in Sierra Leone`} />
                <div>
                  <span className="eyebrow">{String(i + 1).padStart(2, '0')} · Program</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GaraDivider />

      {/* Approach / process section */}
      <section className="section section--paper">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How We Work</span>
            <h2>A three-step approach behind every program.</h2>
          </div>
          <div className="approach-grid">
            {APPROACH.map((a) => (
              <div className="approach-step" key={a.step}>
                <span className="approach-step__num">{a.step}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Support Our Programs"
        title="Your support makes this work possible."
        description="Sponsor a district, fund a scholarship cohort, or give toward the general program fund."
        secondaryLabel="See Our Gallery"
        secondaryTo="/gallery"
      />
    </>
  );
}
