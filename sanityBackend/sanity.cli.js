import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'n12km8si',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  studioHost: 'safeliftdashboard',
  deployment: { autoUpdates: true, appId: 'f21f55e6ac6722673bfde2a3', }
})
