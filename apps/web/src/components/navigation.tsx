import { Link } from "@tanstack/react-router";
import { Github, Star } from "feather-icons-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { WaitlistDialog } from "@/components/waitlist/dialog";
import { Button } from "./ui/button";
import { AnimatedNumber } from "./animated-number";
import { cn } from "@/lib/utils";
import { Boxes } from "lucide-react";

interface GitHubApiResponse {
  stargazers_count: number;
}

export const REPOSITORY = "MahLogic/roadsyster";

export function Navigation() {
  const [stars, setStars] = useState(0);

  const { data: githubData } = useQuery({
    queryKey: ["githubStars"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/repos/${REPOSITORY}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        },
      );
      if (!response.ok) {
        toast.error("Failed to fetch GitHub stars");
        throw new Error("Failed to fetch GitHub stars");
      }
      return response.json() as Promise<GitHubApiResponse>;
    },
  });

  useEffect(() => {
    if (githubData) {
      setStars(githubData.stargazers_count || 0);
    }
  }, [githubData]);
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/6 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center gap-2">
          <Boxes className="h-6 w-6" />
          <span className="text-xl font-semibold">RoadSyster</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#open-source"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Open Source
          </a>
          <a
            href="#support"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Support
          </a>
          <div className="flex gap-2">
            <Link
              to="/github"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex h-8 items-center gap-2 rounded-lg bg-black px-2 text-sm text-white transition-colors hover:bg-black/90",
              )}
            >
              <div className="flex items-center text-white">
                <Github className="mr-1 size-4 fill-white" />
                <span className="ml-1 lg:hidden">Star</span>
                <span className="ml-1 hidden lg:inline">GitHub</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="relative top-px size-4 fill-gray-400 duration-300 group-hover:fill-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                <AnimatedNumber
                  value={stars}
                  className="font-medium text-white"
                />
              </div>
            </Link>
            <WaitlistDialog>
              <Button size="sm">Join Waitlist</Button>
            </WaitlistDialog>
          </div>
        </nav>
      </div>
    </header>
  );
}
