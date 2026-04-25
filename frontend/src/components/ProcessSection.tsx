import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import "@/styles/process.css";

const steps = [
  { icon: MessageSquare, title: "Consultation", description: "We discuss your goals, target audience, and desired features. You get a free quote with no obligations.", duration: "Day 1–2" },
  { icon: PenTool, title: "Design", description: "We create mockups and wireframes tailored to your brand. You review and approve before we proceed.", duration: "Week 1" },
  { icon: Code2, title: "Development", description: "Our developers bring the design to life with clean, modern code. You receive progress updates throughout.", duration: "Week 2–3" },
  { icon: Rocket, title: "Launch & Support", description: "We deploy your site, run final tests, and hand over everything. Ongoing support keeps it running smoothly.", duration: "Week 4" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <div className="process-header">
          <span className="process-label">How We Work</span>
          <h2 className="process-title">From Idea to Launch in 4 Simple Steps</h2>
          <p className="process-description">A transparent, collaborative process that keeps you in the loop every step of the way.</p>
        </div>

        <div className="process-timeline">
          <div className="process-timeline-line" />
          <div className="process-steps">
            {steps.map((step) => (
              <div key={step.title} className="process-step">
                <div className="process-step-icon-wrapper">
                  <step.icon className="process-step-icon" strokeWidth={1.5} />
                </div>
                <div className="process-step-content">
                  <span className="process-step-duration">{step.duration}</span>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
