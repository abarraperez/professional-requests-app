import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app_v1',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
