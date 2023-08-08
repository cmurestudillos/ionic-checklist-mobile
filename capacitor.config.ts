import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'checklist',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    iconPath: "resources/android/icon",
  },
  ios: {
    iconPath: "resources/ios/icon",
  }
};

export default config;
