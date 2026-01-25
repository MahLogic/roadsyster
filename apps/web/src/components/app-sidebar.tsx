import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Boxes, Folders, LayoutDashboard, StickyNote } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { FreelancerLogo } from "./sidebar/freelancer-logo";
import { NavUser } from "./sidebar/nav-user";
import { type ItemType, SidebarSection } from "./sidebar/sidebar-section";

export function AppSidebar() {
  const sidebarGroups: { title: string; items: ItemType[] }[] = [
    {
      title: "Time & Projects",
      items: [
        {
          name: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Projects",
          url: "/projects",
          icon: Folders,
        },
        {
          name: "Tasks",
          url: "/tasks",
          icon: StickyNote,
        },
      ],
    },
    {
      title: "Invoices & Payments",
      items: [],
    },
    {
      title: "Client Management",
      items: [],
    },
  ];

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      color="bg-gray-100 dark:bg-neutral-800"
    >
      <SidebarHeader>
        <FreelancerLogo />
      </SidebarHeader>
      <SidebarContent>
        {sidebarGroups.map((group) => (
          <SidebarSection
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

export const Logo = () => {
  const { open } = useSidebar();
  return (
    <Link
      to="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20 text-black dark:text-white"
    >
      <Boxes className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
      {open && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="truncate font-medium whitespace-pre"
        >
          RoadSyster
        </motion.span>
      )}
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20 text-black dark:text-white"
    >
      <Boxes className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
    </Link>
  );
};
