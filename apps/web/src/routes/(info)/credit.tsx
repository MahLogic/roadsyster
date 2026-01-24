import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/(info)/credit")({
  component: RouteComponent,
});

function RouteComponent() {
  const dependencies = [
    {
      name: "React",
      author: "Meta Platforms, Inc.",
      description: "A JavaScript library for building user interfaces",
      license: "MIT",
      url: "https://react.dev",
    },
    {
      name: "shadcn/ui",
      author: "shadcn",
      description:
        "Beautifully designed components built with Radix UI and Tailwind CSS",
      license: "MIT",
      url: "https://ui.shadcn.com",
    },
    {
      name: "Tailwind CSS",
      author: "Tailwind Labs",
      description: "A utility-first CSS framework for rapid UI development",
      license: "MIT",
      url: "https://tailwindcss.com",
    },
    {
      name: "Radix UI",
      author: "WorkOS",
      description:
        "Unstyled, accessible components for building high‑quality design systems",
      license: "MIT",
      url: "https://www.radix-ui.com",
    },
    {
      name: "Lucide React",
      author: "Lucide Contributors",
      description: "Beautiful & consistent icon toolkit made by the community",
      license: "ISC",
      url: "https://lucide.dev",
    },
    // <div>Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0</div>
    {
      name: "ZAR Icon",
      author: "OnlineWebFonts",
      description:
        "All Rand Icons used in this project are licensed under the CC BY 4.0 license.",
      license: "CC BY 4.0",
      url: "https://www.onlinewebfonts.com/icon/455846",
    },
    {
      name: "Better Auth",
      author: "OnlineWebFonts",
      description:
        "The most comprehensive authentication framework for TypeScript",
      license: "MIT",
      url: "https://www.better-auth.com/",
    },
  ];
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Credits</h1>
          <p className="text-lg">
            This project is built on the shoulders of giants. We're grateful to
            the following open source projects and their contributors.
          </p>
        </div>

        <Separator className="mb-8" />

        <div className="space-y-6">
          {dependencies.map((dep) => (
            <Card key={dep.url} className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{dep.name}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      by {dep.author}
                    </CardDescription>
                  </div>
                  <a
                    href={dep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label={`Visit ${dep.name} website`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{dep.description}</p>
                <div className="inline-block px-3 py-1 border border-gray-300 rounded text-sm">
                  {dep.license} License
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        <div className="text-center text-gray-600">
          <p className="mb-2">
            Special thanks to all the maintainers and contributors of these
            amazing projects.
          </p>
          <p className="text-sm">
            If you believe your project should be credited here, please open an
            issue or submit a pull request.
          </p>
        </div>
      </div>
    </div>
  );
}
