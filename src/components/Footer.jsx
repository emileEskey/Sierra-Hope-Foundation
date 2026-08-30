import { Link } from 'react-router-dom';
import GaraDivider from './GaraDivider';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <GaraDivider tone="ink" />
      <div className="container site-footer__grid">
        <div>
          <div className="site-footer__brand">
            <span className="site-header__mark">SH</span>
            <span>Sierra Hope Foundation</span>
          </div>
          <p className="site-footer__tag">
            Community-led health, education, and livelihoods work across Sierra Leone.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>14 Regent Highway, Freetown, Sierra Leone</li>
            <li>+232 76 000 000</li>
            <li>hello@sierrahope.org</li>
          </ul>
        </div>

        <div>
          <h4>Follow</h4>
          <ul className="site-footer__social">
            <li><a href="https://www.facebook.com/profile.php?id=61593938092700">Facebook</a></li>
            <li><a href="https://wa.me/23233338161">WhatsApp</a></li>
            <li><a href="https://www.tiktok.com/@sense4tech?_r=1&_t=ZS-998zxZwkn95">TikTok</a></li>
            <li><a href="https://www.instagram.com/johnbabsen?igsi=YjE2bzE1aHoyazJ6">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© 2026 Sierra Hope Foundation. All rights reserved.</span>
        <span>Built for a Unimtech School of Technology React project.</span>
      </div>
    </footer>
  );
}
