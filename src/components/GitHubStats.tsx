import { useState, useEffect } from "react";
import { Github, Star, GitFork, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  total_stars: number;
  total_forks: number;
}

export const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // GitHub API public access
        const response = await fetch("https://api.github.com/users/eminemahjoub");

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stats");
        }

        const userData = await response.json();

        // Fetch repos for additional stats
        const reposResponse = await fetch("https://api.github.com/users/eminemahjoub/repos?per_page=100&sort=updated");
        const repos: { stargazers_count: number; forks_count: number }[] = reposResponse.ok ? await reposResponse.json() : [];

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

        setStats({
          followers: userData.followers || 0,
          following: userData.following || 0,
          public_repos: userData.public_repos || 0,
          total_stars: totalStars,
          total_forks: totalForks,
        });

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load stats");
        setLoading(false);
      }
    };

    fetchGitHubStats();

    // Refresh every 5 minutes
    const interval = setInterval(fetchGitHubStats, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Card className="p-6 bg-card border-primary/20">
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  if (error || !stats) {
    return null;
  }

  const statItems = [
    {
      label: "Repositories",
      value: stats.public_repos,
      icon: Github,
    },
    {
      label: "Stars",
      value: stats.total_stars,
      icon: Star,
    },
    {
      label: "Forks",
      value: stats.total_forks,
      icon: GitFork,
    },
    {
      label: "Followers",
      value: stats.followers,
      icon: TrendingUp,
    },
  ];

  return (
    <Card className="p-6 bg-card border-primary/20 card-glow">
      <div className="flex items-center gap-2 mb-4">
        <Github className="w-5 h-5 text-primary" />
        <h3 className="font-display font-bold text-lg">GitHub</h3>
        <span className="ml-auto text-xs text-muted-foreground flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {statItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-lg p-4 bg-muted/50 border border-border hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-xs">{item.label}</span>
              </div>
              <div className="text-2xl font-display font-bold">
                {item.value.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <a
          href="https://github.com/eminemahjoub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-sm flex items-center gap-2 transition-colors"
        >
          <Github className="w-4 h-4" />
          View GitHub Profile
        </a>
      </div>
    </Card>
  );
};
