import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ← Required for external access
    port: 5173, // ← Or whatever your app uses
    strictPort: true,
    allowedHosts: [
      ".ngrok-free.app", // ← Accept any *.ngrok-free.app subdomain
    ],
    cors: true, // ← Optional: ensures CORS isn't blocking
  },
});
