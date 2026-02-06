import { PostHog } from "@posthog/types";

export function trackWaitlistSignup(posthog: PostHog, waitlistId: string) {
  posthog.capture("waitlist_signup", {
    waitlist_id: waitlistId,
  });

  // Optional but recommended
  posthog.identify(waitlistId);
}
