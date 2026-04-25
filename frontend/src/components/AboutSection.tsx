import { Code2, Users, Award, Clock, } from "lucide-react";
import "@/styles/about.css";

const stats = [
  { icon: Code2, value: "120+", label: "Projects Delivered" },
  { icon: Users, value: "85+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Clock, value: "99%", label: "On-Time Delivery" },
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-label">About Us</span>
          <h2 className="about-title">Building Digital Solutions That Matter</h2>
          <p className="about-description">
            At Ateka's World, we are a passionate team of developers and designers based in Kenya,
            dedicated to helping businesses establish a powerful online presence. We combine
            creativity with technical expertise to deliver websites that not only look great
            but also perform exceptionally.
          </p>
        </div>

        <div className="about-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat-card">
              <stat.icon className="about-stat-icon" strokeWidth={1.5} />
              <span className="about-stat-value">{stat.value}</span>
              <p className="about-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
