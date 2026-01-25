import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getInitials } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export function FreelancerLogo() {
  const [loading, setLoading] = useState(false);
  const [freelancer, setFreelancer] = useState<{ logo?: string; name: string }>(
    { name: "RoadSyster" },
  );

  if (loading) {
    return (
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Skeleton className="h-8 w-8 rounded-lg" />
        <div className="grid flex-1 text-left text-sm leading-tight">
          <Skeleton className="truncate font-medium w-5" />
        </div>
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              src={freelancer.logo || "/default-logo.jpg"}
              alt={freelancer.name}
            />
            <AvatarFallback className="rounded-lg">
              {getInitials(freelancer.name)}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{freelancer.name}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
