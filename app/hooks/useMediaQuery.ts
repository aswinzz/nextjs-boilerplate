"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook for responsive design that listens to media query changes
 * @param query - CSS media query string like '(min-width: 768px)'
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window object is available (client-side only)
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      
      // Set initial value
      setMatches(media.matches);

      // Create listener function
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Listen for changes
      media.addEventListener("change", listener);
      
      // Cleanup
      return () => media.removeEventListener("change", listener);
    }
    
    return undefined;
  }, [query]);

  return matches;
} 