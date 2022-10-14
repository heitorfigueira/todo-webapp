const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  name: 'admin-shell',
  exposes: {
    './Module': 'apps/admin-shell/src/app/admin/admin.module.ts',
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
