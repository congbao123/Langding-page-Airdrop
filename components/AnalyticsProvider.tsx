"use client";

import { useEffect } from "react";
import { getFirebaseAnalytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

export function AnalyticsProvider() {
  useEffect(() => {
    //  Firebase Analytics  app load  first time
    getFirebaseAnalytics().then((analytics) => {
      if (analytics) {
        logEvent(analytics, "page_view", {
          page_title: "WikaEX Landing Page",
          page_location: window.location.href,
        });
      }
    });
  }, []);

  return null; 
}
