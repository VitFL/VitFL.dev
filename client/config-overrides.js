const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@root": path.resolve(__dirname, `${paths.appSrc}/`),
    "@components": path.resolve(__dirname, `${paths.appSrc}/components/`),
    "@sections": path.resolve(
      __dirname,
      `${paths.appSrc}/components/sections/`
    ),
    "@assets": path.resolve(__dirname, `${paths.appSrc}/assets/`),
    "@constants": path.resolve(__dirname, `${paths.appSrc}/constants/`),
    "@hooks": path.resolve(__dirname, `${paths.appSrc}/hooks/`),
    "@utils": path.resolve(__dirname, `${paths.appSrc}/utils/`)
  })(config, env);
  return config;
};
