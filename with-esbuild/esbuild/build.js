import { build } from "esbuild";
import config from "./config.js";

const run = async () => {
  try {
    await build(config);
    console.log("\n✓ Build has finished! 📦\n");
  } catch (e) {
    console.log("\n❌ Build has failed! 🚨\n");
    console.error(e);
  }
};

run();
