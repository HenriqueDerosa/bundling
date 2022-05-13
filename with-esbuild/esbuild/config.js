const inlineImage = require("esbuild-plugin-inline-image");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

module.exports = {
  logLevel: "info",
  entryPoints: ["./src/index.js"],
  // outfile: "./public/js/app.js",
  outdir: "public",
  bundle: true,
  // sourcemap: true,
  loader: {
    ".js": "jsx",
    ".png": "dataurl",
    ".css": "default",
    ".graphql": "text",
  },
  plugins: [
    cssModulesPlugin({
      inject: true,
      // v2: true,
      outdir: "./public",
    }),
    inlineImage({
      extensions: ["svg"],
    }),
  ],
  /* externals: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies || {}),
  ], */
};
