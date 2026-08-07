type WhopTrackProperties = {
  value?: number;
  currency?: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    whop?: {
      track?: (eventName: string, properties?: WhopTrackProperties) => void;
    };
  }
}

export function trackWhopEvent(eventName: string, properties?: WhopTrackProperties) {
  if (typeof window === "undefined") return;

  try {
    window.whop?.track?.(eventName, properties);
  } catch (err) {
    console.warn("Whop event tracking failed", err);
  }
}
