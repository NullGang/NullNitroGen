module.exports = {
  packagerConfig: {
    icon: './src/assets/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        language: 1033,
        manufacturer: 'NullOnRise Dev'
      }
    },
  ],
};
