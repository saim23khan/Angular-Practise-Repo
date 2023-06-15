import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.apiintegration.com',
  appName: 'angular-api-integration',
  webDir: 'dist/angular-api-integration',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'http',
    url: 'http://192.168.1.109:4200',
    hostname: '192.168.1.109',
    cleartext: true,
    allowNavigation: [
    ]
  }
};

export default config;
