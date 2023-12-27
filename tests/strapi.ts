import Strapi from "@strapi/strapi";

let instance;


export async function setupStrapi() {
  try {
    if (!instance) {
      await Strapi({ distDir: "./dist" }).load();
      instance = strapi;
      await instance.server.mount();
    }
  } catch (err) {
    console.log("error setting up strapi", err);
  }

  return instance;
}