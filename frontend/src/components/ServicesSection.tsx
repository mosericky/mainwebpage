import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import "@/styles/services.css";

const packages = [
  {
    name: "Starter",
    price: "KES 15,000",
    priceRange: "– 30,000",
    description: "Perfect for small businesses needing a clean, simple online presence.",
    features: ["Single-page landing website", "Mobile responsive design", "Contact form integration", "Basic SEO setup", "Social media links", "1 round of revisions"],
  },
  {
    name: "Business (Most Popular)",
    price: "KES 35,000",
    priceRange: "– 75,000",
    description: "Ideal for growing businesses that need a multi-page professional website.",
    features: ["Up to 7 custom pages", "Content management system", "Advanced responsive design", "Google Analytics integration", "Blog functionality", "WhatsApp chat integration", "3 rounds of revisions"],
  },
  {
    name: "Premium",
    price: "KES 80,000",
    priceRange: "– 200,000",
    description: "For businesses that need advanced features and custom functionality.",
    features: ["Unlimited custom pages", "E-commerce functionality", "Payment integration (M-Pesa, cards)", "User authentication system", "Admin dashboard", "Custom animations & interactions", "Priority support for 3 months", "Unlimited revisions"],
  },
  {
    name: "Enterprise",
    price: "KES 250,000",
    priceRange: "+",
    description: "Complex web applications and systems tailored to your exact requirements.",
    features: ["Full-stack web application", "API development & integration", "Database design & management", "Advanced security features", "Automated workflows", "Third-party integrations", "Dedicated project manager", "12 months of support"],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-label">Our Services</span>
          <h2 className="services-title">Website Packages for Every Budget</h2>
          <p className="services-description">
            Transparent pricing in Kenyan Shillings. Choose the package that matches your needs —
            pricing depends on the complexity and features you want.
          </p>
        </div>

        <div className="services-grid">
          {packages.map((pkg) => (
            <div key={pkg.name} className="service-card">
              <h3 className="service-card-name">{pkg.name}</h3>
              <div className="service-card-price">
                <span className="service-card-price-value">{pkg.price}</span>
                <span className="service-card-price-range">{pkg.priceRange}</span>
              </div>
              <p className="service-card-desc">{pkg.description}</p>
              <ul className="service-card-features">
                {pkg.features.map((feature) => (
                  <li key={feature} className="service-card-feature">
                    <Star size={16} className="service-card-feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="service-card-button" onClick={scrollToContact}>Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
