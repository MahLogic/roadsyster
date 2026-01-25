import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CORE_TEAM_MEMBERS } from "./contributors-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function findContributorName({
  username,
}: {
  username: string;
}): string | undefined {
  return CORE_TEAM_MEMBERS.find((item) => item.username === username)?.name;
}

export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}
