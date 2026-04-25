import { Button } from "@/components/ui/button";
import heroDev from "@/assets/hero-dev.jpg";
import "@/styles/hero.css";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-wrapper">
        <img src={heroDev} alt="Atekas World — Custom Web Development" className="hero-bg-image" loading="eager" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to Atekas World</span>
          <h1 className="hero-title">
            We Build Websites That{" "}
            <span className="hero-title-accent">Grow Your Business</span>
          </h1>
          <p className="hero-description">
            Transform your vision into reality with tailored web solutions
            designed for your unique business needs — at prices that work for you.
          </p>
          <div className="hero-buttons">
            
            <Button variant="outline-hero" size="lg" className="rounded-full px-8 text-base" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}>
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
