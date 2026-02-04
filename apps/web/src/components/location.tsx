// apps/web/src/components/LocationDisplay.tsx
import { useEffect, useState } from "react";
import { getUserLocation } from "@/lib/posthog";

interface Location {
  city: string;
  country: string;
  countryCode: string;
  region: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

export function LocationDisplay() {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserLocation().then((loc) => {
      setLocation(loc);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading location...</div>;
  if (!location) return <div>Location unavailable</div>;

  return (
    <div>
      <h2>Your Location</h2>
      <p>City: {location.city}</p>
      <p>Country: {location.country}</p>
      <p>Region: {location.region}</p>
      <p>Timezone: {location.timezone}</p>
      <p>
        Coordinates: {location.latitude}, {location.longitude}
      </p>
    </div>
  );
}
