import { useState } from "react";
import { Github, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { CountryFlag } from "@/components/CountryFlag";

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const countFor = (cat: string) => projects.filter((p) => p.category === cat).length;

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="section-label mb-3">~/work</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projects & <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {projects.length} projects across AI, blockchain, IoT, and accessibility
            </p>
          </div>

          {/* Industry filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === "All"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/50 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              All ({projects.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/50 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat} ({countFor(cat)})
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <Card
                key={project.id}
                className="p-6 bg-card card-glow border-border hover:border-primary/30 relative overflow-hidden animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Star className="h-4 w-4 text-primary fill-primary" />
                    )}
                    {project.countryCode && (
                      <CountryFlag code={project.countryCode} size={16} />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.longDescription || project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 pt-4 border-t border-border text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
