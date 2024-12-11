"use client";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";
import { Skeleton } from "../ui/skeleton";
import { BackMenu } from "./back-menu";
import { BackProjects } from "./back-projects";
import { BackUser } from "./back-user";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

interface SidebarProps extends React.ComponentProps<typeof Sidebar> {
  storageKey?: string;
}

export function BackSidebar({
  storageKey = "t-sidebar-state",
  ...props
}: SidebarProps) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, unknown>>(
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) acc.push(key);
      return acc;
    },
    []
  );

  const onExpand = (organisationId: string) => {
    setExpanded((curr) => ({
      ...curr,
      [organisationId]: !curr[organisationId],
    }));
  };

  if (!isLoadedOrgList || !isLoadedOrg || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  console.log(userMemberships);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher
          teams={userMemberships.data}
          activeTeamId={activeOrganization?.id}
        /> */}
        {/* <SiteLogo /> */}
      </SidebarHeader>
      <SidebarContent>
        <BackMenu items={data.navMain} />
        <BackProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <BackUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
