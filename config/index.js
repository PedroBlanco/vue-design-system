"use strict"

const path = require("path")

module.exports = {
  build: {
    // Webpack mode
    mode: "production",

    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "assets",
    assetsPublicPath: "/",

    // Source map
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  system: {
    // Webpack mode
    mode: "production",

    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "system",
    assetsPublicPath: "/",

    // The system.js library target, supports all
    // Webpack libraryTargets (umd, commonjs2, etc...)
    //
    // In general you probably want this to be “umd”,
    // but for SSR/Nuxt.js you might want to use “commonjs2”
    // to avoid usage of window object.
    libraryTarget: "umd",

    // Enable or disable performance hints on build
    performanceHints: false,

    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    // Webpack mode
    mode: "development",

    // Paths
    assetsSubDirectory: "assets",
    assetsPublicPath: "/",
    proxyTable: {},

    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    //    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    port: 9080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: false, // Show OS X notification?
    poll: false, // https://webpack.js.org/configuration/watch/#watchoptions

    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // Source map
    cssSourceMap: true,
  },
}
