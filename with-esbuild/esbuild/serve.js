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
    console.log("\nā Build has finished! š¦\n");
  } catch (e) {
    console.log("\nā Build has failed! šØ\n");
    console.error(e);
  }
};

run();
