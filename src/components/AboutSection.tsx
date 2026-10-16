import { MapPin, GraduationCap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolio";
import { GitHubStats } from "./GitHubStats";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="section-label mb-3">~/about</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate engineer bridging AI, IoT, and R&D
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Terminal card */}
            <div className="animate-scale-in">
              <div className="rounded-xl overflow-hidden border border-border card-glow bg-[#1a1b26] text-left">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-white/40 font-mono">amine@portfolio:~</span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed text-white/80">
                  <p><span className="text-primary">$</span> whoami</p>
                  <p className="text-white/60">amine_mahjoub</p>
                  <p className="mt-3"><span className="text-primary">$</span> cat focus.txt</p>
                  <p className="text-white/60">["AI", "Blockchain", "IoT", "Research"]</p>
                  <p className="mt-3"><span className="text-primary">$</span> uname -a</p>
                  <p className="text-white/60">CS-Grad · Ubuntu member · Community builder</p>
                  <p className="mt-3"><span className="text-primary">$</span> ./status</p>
                  <p className="text-green-400">● open_to_work — seeking international roles</p>
                  <p className="mt-2"><span className="text-primary">$</span> <span className="inline-block w-2.5 h-4 bg-primary/80 animate-pulse align-middle" /></p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg leading-relaxed text-foreground/80">
                {personalInfo.bio}
              </p>

              <div className="space-y-4">
                <Card className="p-4 bg-card/50 border-primary/20">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card/50 border-primary/20">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{personalInfo.education}</p>
                      <p className="text-sm text-muted-foreground">
                        {personalInfo.university}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card/50 border-primary/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Interests</p>
                      <p className="text-sm text-muted-foreground">
                        AI, Blockchain, Web Development, R&D
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-16 animate-fade-in-up">
            <GitHubStats />
          </div>
        </div>
      </div>
    </section>
  );
};
