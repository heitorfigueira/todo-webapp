const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  name: 'authentication-shell',
  exposes: {
    './Module': 'apps/authentication-shell/src/app/authentication/authentication.module.ts',
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
