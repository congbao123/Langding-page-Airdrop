import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmsUz7YYl32ixRLCQlbf7xKBs0ww5zcJc",
  authDomain: "wika-landing.firebaseapp.com",
  projectId: "wika-landing",
  storageBucket: "wika-landing.firebasestorage.app",
  messagingSenderId: "261286274703",
  appId: "1:261286274703:web:2bd5f2e58dd8d7e652b2fa",
  measurementId: "G-61FWBGSB6R",
};

// Tránh khởi tạo nhiều lần khi hot-reload
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Analytics chỉ chạy được trên browser (không chạy SSR)
let analyticsInstance: Analytics | null = null;

export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null; // SSR guard
  if (analyticsInstance) return analyticsInstance;

  const supported = await isSupported();
  if (supported) {
    analyticsInstance = getAnalytics(app);
  }
  return analyticsInstance;
}

export { app };
