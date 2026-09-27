import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.templates',
  appName: 'ionic_ui_templates',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SystemBars: {
      // This is needed to make setOverlaysWebView() work on Android < 16 device without edge-to-edge support.
      insetsHandling: 'disable',
    },
  },
};

export default config;
