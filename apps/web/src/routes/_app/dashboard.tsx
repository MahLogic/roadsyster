import { createFileRoute } from "@tanstack/react-router";
import { Folder } from "feather-icons-react";
import { Briefcase, StickyNote } from "lucide-react";
import { MetricCard } from "@/components/dashboard";
import { Rand } from "@/components/icons";

export const Route = createFileRoute("/_app/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Projects"
          value={0}
          unit=""
          icon={<Folder className="h-4 w-4 text-muted-foreground" />}
          description="Cumulative revenue generated"
          valueClassName="text-emerald-500"
        />
        <MetricCard
          title="Tasks"
          value={0}
          icon={<StickyNote className="h-4 w-4 text-muted-foreground" />}
          description="Number of sales recorded"
        />
        <MetricCard
          title="Clients"
          value={0}
          unit=""
          icon={<Briefcase className="h-4 w-4 text-muted-foreground" />}
          description="Average value per transaction"
          valueClassName="text-blue-400"
        />
        <MetricCard
          title="Pending Payments "
          value={3000.45}
          unit="R"
          fractionDigits={2}
          icon={<Rand className="h-4 w-4 text-muted-foreground" />}
          description="Average value per transaction"
          valueClassName="text-blue-400"
        />
      </div>
    </div>
  );
}
