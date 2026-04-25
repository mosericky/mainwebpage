import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import "@/styles/faq.css";

const faqs = [
  { question: "How long does it take to build a website?", answer: "Most projects are completed within 2–4 weeks depending on complexity. A simple landing page can be ready in under a week, while a full e-commerce platform may take 4–6 weeks. We'll give you a clear timeline during our free consultation." },
  { question: "What is included in the pricing?", answer: "Our prices cover design, development, mobile responsiveness, basic SEO, and deployment. Domain registration and hosting are handled separately — we'll guide you through the best options for your budget." },
  { question: "Do you offer hosting and domain services?", answer: "We help you set up reliable, affordable hosting and register your domain. We recommend trusted providers and handle the full setup so you don't have to worry about the technical details." },
  { question: "How many revisions do I get?", answer: "The number of revisions depends on your package — Starter includes 1 round, Business includes 3 rounds, and Premium/Enterprise come with unlimited revisions. We work closely with you to get things right." },
  { question: "Do you provide ongoing maintenance?", answer: "Yes! We offer monthly maintenance plans starting from KES 3,000/month that include security updates, content changes, backups, and performance monitoring. Premium and Enterprise packages include complimentary support periods." },
  { question: "Can I update the website content myself?", answer: "Absolutely. For Business packages and above, we integrate a content management system so you can easily update text, images, and blog posts without any coding knowledge." },
  { question: "What payment methods do you accept?", answer: "We accept M-Pesa, bank transfers, and card payments. We typically split payments into a 50% deposit upfront and the remaining 50% upon project completion." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">FAQ</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">Everything you need to know before getting started.</p>
        </div>

        <div className="faq-list">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="faq-item">
                <AccordionTrigger className="faq-item-trigger">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-item-content">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
