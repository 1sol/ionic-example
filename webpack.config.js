const path = require("path");
const tsconfig = require("./tsconfig.paths.json");
const useDefaultConfig = require("@ionic/app-scripts/config/webpack.config.js");

useDefaultConfig.dev.resolve = useDefaultConfig.prod.resolve = {
  extensions: [".ts", ".js", ".json"],
  modules: [
    path.resolve("node_modules"),
    path.resolve(tsconfig.compilerOptions.baseUrl),
  ],
};

module.exports = function () {
  return useDefaultConfig;
};
