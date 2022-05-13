const esbuild = require("esbuild");
const { builtinModules } = require("node:module");
// const { nodeExternalsPlugin } = require("esbuild-node-externals");
const pkg = require("../package.json");
const config = require("./config");

const run = async () => {
  try {
    await esbuild.build({
      ...config,
      /* external: [
        ...builtinModules,
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies || {}),
      ], */
    });
    console.log("\n✓ Build has finished! 📦\n");
  } catch (e) {
    console.log("\n❌ Build has failed! 🚨\n");
    console.error(e);
  }
};

run();
