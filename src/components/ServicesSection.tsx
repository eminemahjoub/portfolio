import { Brain, Blocks, Cpu, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Intelligent Systems & AI",
    description:
      "Custom AI solutions — predictive analytics, computer vision, and NLP systems built for real-world decision making.",
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description:
      "ERC-20 tokens, smart contracts in Solidity, and decentralized marketplaces for transparent digital ecosystems.",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description:
      "Sensor-driven hardware solutions with Raspberry Pi and Arduino — from smart bins to automation pipelines.",
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "End-to-end web platforms with React, Angular, Node.js, NestJS, and PostgreSQL — from prototype to production.",
  },
];

const industries = [
  "HealthTech",
  "EdTech",
  "Accessibility",
  "Blockchain",
  "IoT & Smart Systems",
  "Cybersecurity",
  "Research",
];

export const ServicesSection = () => {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="section-label mb-3">~/services</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Engineering solutions designed for real-world challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="p-6 bg-card card-glow border-border hover:border-primary/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <button
                        onClick={scrollToContact}
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Discuss your project →
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Industry expertise chips */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-2">Industry Expertise</h3>
            <p className="text-muted-foreground mb-6">
              Experience delivering solutions across diverse sectors
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
