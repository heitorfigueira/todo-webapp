const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  name: 'authorization-shell',
  exposes: {
    './Module': 'apps/authorization-shell/src/app/app.module.ts',
  },
  shared: {
      ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
      })
  },
  remotes: []
};
