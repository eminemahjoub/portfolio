import { Github, Linkedin, Mail, Rocket, Share2, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountryFlag } from "@/components/CountryFlag";
import { personalInfo, experience } from "@/data/portfolio";

export const HeroSection = () => {
  const countries = Array.from(
    new Set(experience.map((e) => e.countryCode).filter(Boolean))
  );

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Backdrop: subtle dot grid + soft glows */}
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-24 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-5 animate-fade-in-up">
            <p className="font-mono text-primary tracking-widest text-sm uppercase">
              {personalInfo.name}
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-gradient">
                AI & Intelligent Systems Engineer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into intelligent systems — custom AI,
              blockchain, and IoT solutions with real-world impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <Button
              size="lg"
              className="px-8"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href={`mailto:${personalInfo.email}`}>Let's Talk</a>
            </Button>
          </div>

          {/* Countries strip */}
          <div
            className="animate-fade-in pt-4"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Collaborations across
            </p>
            <div className="flex items-center justify-center gap-3">
              {countries.map((code) => (
                <CountryFlag key={code} code={code} size={20} />
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.mastodon}
              target="_blank"
              rel="me noopener noreferrer"
              className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Mastodon"
            >
              <Share2 className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.launchpad}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Launchpad"
            >
              <Rocket className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
