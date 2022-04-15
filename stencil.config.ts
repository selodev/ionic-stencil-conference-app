import { Config } from "@stencil/core";

export const config: Config = {
  taskQueue: "async",
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      baseUrl: "https://conference.ionicframework.com/",
      copy: [{ src: "robots.txt" }],
    },
  ],
};
