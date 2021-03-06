import { build } from "esbuild";
import config from "./config.js";

const run = async () => {
  try {
    await build(config);
    console.log("\nā Build has finished! š¦\n");
  } catch (e) {
    console.log("\nā Build has failed! šØ\n");
    console.error(e);
  }
};

run();
