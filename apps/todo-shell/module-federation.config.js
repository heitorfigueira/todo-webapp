const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  name: 'todo-shell',

  remotes: {
    admin: 'admin-shell@http://localhost:4201/remoteEntry.js',
    authorization: 'authorization-shell@http://localhost:4202/remoteEntry.js'
  },
  shared: {
      ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
      })
  }
};
