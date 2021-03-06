import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { insertSeedData } from "./seed-data/index";

export default config({
  db: {
    provider: "sqlite",
    url: "file:./keystone-example.db",
    async onConnect(context) {
      if (process.argv.includes("--seed-data")) {
        await insertSeedData(context);
      }
    },
  },
  lists,
});
