const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  devServer: {
    liveReload: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "mfe1",
      library: { type: "module" },
      filename: "remoteEntry.mjs",
      exposes: {
        './web-components': './src/bootstrap.ts',
      },

      shared: {
        "rxjs": {}
      }
    })
  ],
};
