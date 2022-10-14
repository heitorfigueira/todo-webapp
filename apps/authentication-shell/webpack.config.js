const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const config = require('./module-federation.config');

module.exports = withModuleFederationPlugin(config);

