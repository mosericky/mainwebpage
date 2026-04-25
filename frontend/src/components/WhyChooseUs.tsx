import { Palette, Zap, ShieldCheck, Headphones, Smartphone, TrendingUp } from "lucide-react";
import "@/styles/whychooseus.css";

const features = [
  { icon: Palette, title: "Unique Designs", description: "Every project is custom-designed from scratch — no templates, no generic looks." },
  { icon: Zap, title: "Fast Turnaround", description: "We deliver quality work on time, with most projects completed within 2-4 weeks." },
  { icon: Smartphone, title: "Mobile-First", description: "All our websites are built mobile-first, ensuring a great experience on every device." },
  { icon: ShieldCheck, title: "Secure & Reliable", description: "We follow best security practices and use reliable hosting to keep your site safe." },
  { icon: Headphones, title: "Dedicated Support", description: "Get ongoing support and maintenance to keep your website running smoothly." },
  { icon: TrendingUp, title: "SEO Optimized", description: "Built-in search engine optimization to help your business get found online." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-section">
      <div className="why-container">
        <div className="why-header">
          <span className="why-label">Why Choose Us</span>
          <h2 className="why-title">What Sets Atekas World Apart</h2>
          <p className="why-description">We don't just build websites — we craft digital experiences that help your business grow.</p>
        </div>

        <div className="why-grid">
          {features.map((feature) => (
            <div key={feature.title} className="why-card">
              <div className="why-card-icon-wrapper">
                <feature.icon className="why-card-icon" strokeWidth={1.5} />
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
