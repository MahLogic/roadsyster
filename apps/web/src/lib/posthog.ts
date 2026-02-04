import posthog from "posthog-js";
import { PostHog } from "posthog-js/react";

// Initialize PostHog
export const initPostHog = (instance: PostHog) => {
  if (typeof window !== "undefined") {
    instance.init(import.meta.env.PUBLIC_POSTHOG_KEY, {
      api_host: import.meta.env.PUBLIC_POSTHOG_HOST,
      defaults: "2025-11-30",
    });
  }
};

// Get user's location from PostHog properties
export const getUserLocation = async () => {
  if (typeof window === "undefined") return null;

  // Wait for PostHog to load
  posthog.isFeatureEnabled("any-flag"); // Dummy call to ensure loaded

  // Get the person properties which include location data
  const properties = posthog.get_property("$geoip_city_name");

  return {
    city: posthog.get_property("$geoip_city_name"),
    country: posthog.get_property("$geoip_country_name"),
    countryCode: posthog.get_property("$geoip_country_code"),
    region: posthog.get_property("$geoip_subdivision_1_name"),
    timezone: posthog.get_property("$geoip_time_zone"),
    latitude: posthog.get_property("$geoip_latitude"),
    longitude: posthog.get_property("$geoip_longitude"),
  };
};
