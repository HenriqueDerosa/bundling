const esbuild = require("esbuild");
const config = require("./config");

const run = async () => {
  try {
    await esbuild.serve(
      {
        servedir: "public",
      },
      config
    );
    console.log("\n✓ Build has finished! 📦\n");
  } catch (e) {
    console.log("\n❌ Build has failed! 🚨\n");
    console.error(e);
  }
};

run();
