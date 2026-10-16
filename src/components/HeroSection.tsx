import { ArrowDown, Github, Linkedin, Mail, Rocket, Share2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import profileImg from "@/amine mahjoub image.png";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Backdrop: subtle dot grid + soft glows */}
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-24 -left-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">Open to international opportunities</span>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-primary text-lg">~/whoami</p>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-foreground/80 max-w-xl">
                AI & Blockchain Innovator · Intelligent Systems Researcher · Entrepreneur
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="px-7"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-7"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
              <Button size="lg" variant="ghost" className="px-7" asChild>
                <a href="/cv.pdf" download="Amine_Mahjoub_CV.pdf">
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2">
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

          {/* Photo */}
          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-primary/20 card-glow">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 px-4 py-3 rounded-xl bg-card border border-border shadow-lg flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <p className="font-semibold leading-tight">Monastir, Tunisia</p>
                  <p className="text-muted-foreground text-xs">UTC+1 · Remote-friendly</p>
                </div>
              </div>
            </div>
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
