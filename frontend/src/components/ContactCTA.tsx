import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import "@/styles/contact.css";

const ContactCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Received!", description: "Thank you for reaching out. We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          <div>
            <span className="contact-label">Get in Touch</span>
            <h2 className="contact-title">Ready to Build Your Dream Website?</h2>
            <p className="contact-description">
              Tell us about your project and we'll provide a free consultation with a detailed quote. No obligations, no hidden costs.
            </p>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper"><Mail className="contact-info-icon" /></div>
                <div><p className="contact-info-label">Email Us</p><p className="contact-info-value">atekasworld@gmail.com</p></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper"><Phone className="contact-info-icon" /></div>
                <div><p className="contact-info-label">Call / WhatsApp</p><p className="contact-info-value">+254 791 473 580</p></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper"><MapPin className="contact-info-icon" /></div>
                <div><p className="contact-info-label">Location</p><p className="contact-info-value">Nairobi, Kenya</p></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name" className="contact-form-label">Your Name</label>
              <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className="contact-form-input" />
            </div>
            <div>
              <label htmlFor="email" className="contact-form-label">Email Address</label>
              <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className="contact-form-input" />
            </div>
            <div>
              <label htmlFor="message" className="contact-form-label">Tell Us About Your Project</label>
              <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} className="contact-form-textarea" />
            </div>
            <Button variant="hero" size="lg" className="contact-form-button gap-2"><Send size={18} />Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
