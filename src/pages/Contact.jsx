import { useState } from 'react';
import PageHero from '../components/PageHero';
import CTABand from '../components/CTABand';
import './Contact.css';
import all from '../assets/all.jpg';

const INITIAL = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in every field before sending.');
      setSent(false);
      return;
    }
    setError('');
    setSent(true);
    setForm(INITIAL);
  };

  return (
    <>
      <PageHero
        crumb="Contact Us"
        kicker="Get In Touch"
        title="We'd love to hear from you."
        description="Questions about a program, a partnership, or how to give. send us a message and a team member will reply within two working days."
        image={all}
        imageAlt="Sierra Hope Foundation office in Freetown"
      />

      {/* Contact form + info section */}
      <section className="section section--paper">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <span className="eyebrow">Send Us a Message</span>
            <h2>Start the conversation</h2>

            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" />

            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="How can we help?" />

            {error && <p className="contact-form__note contact-form__note--error">{error}</p>}
            {sent && <p className="contact-form__note contact-form__note--ok">Thank you — your message has been received.</p>}

            <button type="submit" className="btn btn--ember">Send Message</button>
          </form>

          <aside className="contact-info">
            <span className="eyebrow">Contact Information</span>
            <ul>
              <li>
                <strong>Address</strong>
                UNIMTECH, Freetown, Sierra Leone
              </li>
              <li>
                <strong>Phone</strong>
                +232 99 480 932
              </li>
              <li>
                +232 30 499 138
              </li>
              <li>
                +232 80 061 959
              </li>
              <li>
                +232 33 338 161
              </li>
              <li>
                +232 76 358 273
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:sierrahope2026@gmail.com">sierrahope2026@gmail.com</a>
              </li>
              <li>
                <strong>Office Hours</strong>
                Mon – Fri, 8:30am – 4:30pm
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Map / location section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-map">
            <iframe
              title="Sierra Hope Foundation office location, Freetown"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-13.26%2C8.46%2C-13.20%2C8.50&layer=mapnik&marker=8.48%2C-13.23"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Stay Connected"
        title="Join our quarterly community update."
        description="A short email each quarter on program results, district by district."
        primaryLabel="Give Support"
      />
    </>
  );
}
