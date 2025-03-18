import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run capacitor-7-issue-reproduction:serve',
        production: 'npx nx run capacitor-7-issue-reproduction:serve-static',
      },
      ciWebServerCommand:
        'npx nx run capacitor-7-issue-reproduction:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
