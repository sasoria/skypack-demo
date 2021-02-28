/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv', 'snowpack-plugin-less' ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    "bundle": true,
  },
  packageOptions: {
    rollup: {
      plugins: [require('rollup-plugin-postcss')({
        extract: false,
        minimize: true,
        loaders: [require('rollup-plugin-postcss-webpack-alias-less-loader')({
          nodeModulePath: "./node_modules",
          aliases: {}
      })],
        use: [
          [
            "less",
            {
              includePaths: [
                "./src",
                "./node_modules"
              ],
            },
          ],
        ],
      })],
    }
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
