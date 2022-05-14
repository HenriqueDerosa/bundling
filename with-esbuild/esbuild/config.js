import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import cssModulesPlugin from "esbuild-css-modules-plugin";

const outdir = "public";

/** @type {esbuild.BuildOptions} */
const config = {
  format: "esm",
  treeShaking: true,
  chunkNames: "[name]-[hash]",
  logLevel: process.env.NODE_ENV === "development" ? "debug" : "info",
  entryPoints: ["./src/index.js"],
  outdir,
  bundle: true,
  // sourcemap: true,
  minify: !!process.env.NODE_ENV === "production",
  loader: {
    ".js": "jsx",
    ".png": "dataurl",
    ".css": "default",
    ".graphql": "text",
  },
  plugins: [
    cssModulesPlugin({
      inject: true,
      outdir,
    }),
    inlineImage({
      extensions: ["svg"],
    }),
  ],
};

export default config;
