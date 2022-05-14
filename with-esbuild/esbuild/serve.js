import { serve } from "esbuild";
import config from "./config.js";

const run = async () => {
  try {
    await serve(
      {
        servedir: "public",
        port: 8000,
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
