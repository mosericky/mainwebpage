import { Facebook, Instagram, MessageCircle, Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.png";
import "@/styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollTo = (href: string) => { document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Atekas World" className="footer-logo-img" />
              <span className="footer-logo-text">Atekas <span className="footer-logo-accent">World</span></span>
            </div>
            <p className="footer-tagline">Building exceptional websites and web applications for businesses across Kenya and beyond.</p>
            <div className="footer-socials">
              <a href="https://wa.me/254791473580" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-social-link"><MessageCircle size={18} /></a>
              <a href="https://www.facebook.com/derick.mose.90" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/atekas_world/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link"><Instagram size={18} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link"><Linkedin size={18} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-column-list">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}><button onClick={() => scrollTo(`#${item.toLowerCase()}`)} className="footer-column-link">{item}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-column-title">Services</h4>
            <ul className="footer-column-list">
              <li className="footer-column-text">Web Development</li>
              <li className="footer-column-text">Web Design</li>
              <li className="footer-column-text">E-Commerce</li>
              <li className="footer-column-text">SEO Optimization</li>
              <li className="footer-column-text">Maintenance & Support</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-column-title">Contact</h4>
            <ul className="footer-column-list">
              <li className="footer-column-text">atekasworld@gmail.com</li>
              <li className="footer-column-text">+254 791 473 580</li>
              <li className="footer-column-text">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} Atekas World. All rights reserved.</p>
          <div className="footer-legal">
            <span className="footer-legal-link">Privacy Policy</span>
            <span className="footer-legal-link">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
