// ===========================================
// EASY TO CHANGE CONFIGURATION
// ===========================================

/**
 * GitHub repository in format "owner/repo"
 * Change this to your repository
 */
export const REPOSITORY = "MahLogic/roadsyster";

/**
 * Usernames to exclude from contributors list
 * (bots, automation accounts, etc.)
 */
export const EXCLUDED_USERNAMES = [
  "bot1",
  "dependabot",
  "github-actions",
  "zerodotemail",
  "autofix-ci[bot]",
];

/**
 * Core team member configuration
 * Add or remove members here
 */
export const CORE_TEAM_MEMBERS: CoreTeamMember[] = [
  {
    name: "Kelly Mahlangu",
    username: "mahkellz",
    role: "Founder & CEO",
    position: 1,
    x: "GoKells_OG",
  },
];

/**
 * Project metadata
 */
export const PROJECT_INFO = {
  name: "RoadSyster",
  description: "An open source freelancer app built with modern technologies",
  discordUrl: "https://discord.gg/pEP8m3yv46",
  twitterUrl: "https://x.com/mahlogic137",
  lightLogo: "/black-icon.svg",
  darkLogo: "/white-icon.svg",
};

// ===========================================
// TYPE DEFINITIONS
// ===========================================

export interface CoreTeamMember {
  username: string;
  name: string;
  role: string;
  position: number;
  x?: string;
  website?: string;
}

export interface Contributor {
  login: string;
  name?: string;
  avatar_url: string;
  contributions: number;
  html_url: string;
}

export interface RepoStats {
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  openPRs: number;
}

export interface TimelineData {
  date: string;
  stars: number;
  forks: number;
  watchers: number;
  commits: number;
}

export interface ActivityData {
  date: string;
  commits: number;
  issues: number;
  pullRequests: number;
}
