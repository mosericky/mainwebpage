import { Quote } from "lucide-react";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";
import portfolioFitness from "@/assets/portfolio-fitness.jpg";
import "@/styles/portfolio.css";

const projects = [
  { image: portfolioRestaurant, title: "Savannah Bites", category: "Restaurant Website", description: "A dark, elegant restaurant website with online menu and table reservations." },
  { image: portfolioEcommerce, title: "UrbanThread", category: "E-Commerce Store", description: "Full-featured fashion e-commerce platform with M-Pesa payment integration." },
  { image: portfolioRealestate, title: "PrimeNest Realtors", category: "Real Estate Platform", description: "Property listing website with map search, filters, and agent profiles." },
  { image: portfolioFitness, title: "FitZone Gym", category: "Fitness & Wellness", description: "Bold gym website with membership plans, class schedules, and trainer bios." },
];

const testimonials = [
  { name: "Grace Wanjiku", role: "Owner, Savannah Bites", quote: "Ateka's World transformed our online presence completely. Our reservations increased by 60% within the first month of launching the new site." },
  { name: "James Ochieng", role: "CEO, PrimeNest Realtors", quote: "Professional, creative, and incredibly responsive. They delivered our property platform ahead of schedule and within budget." },
  { name: "Amina Hassan", role: "Founder, UrbanThread", quote: "The e-commerce site they built handles thousands of orders seamlessly. Best investment we've made for our business." },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="portfolio-label">Our Work</span>
          <h2 className="portfolio-title">Projects We're Proud Of</h2>
          <p className="portfolio-description">A selection of websites and web applications we've built for clients across Kenya.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.title} className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-card-image" loading="lazy" />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-card-category">{project.category}</span>
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-header">
          <h3 className="testimonials-title">What Our Clients Say</h3>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <Quote className="testimonial-icon" />
              <p className="testimonial-quote">"{t.quote}"</p>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
