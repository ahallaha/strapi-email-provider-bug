import { setupStrapi } from "./strapi";

let emailProvider;

beforeAll(async () => {
  await setupStrapi();
  emailProvider = await strapi.plugin("email").provider;
});

it("sets up strapi", () => {
  expect(strapi).toBeDefined();
});

describe("emailProvider", () => {
  it("loads email provider", () => {
    expect(emailProvider).toBeDefined();
  });

  it("should send", async () => {
    const response = await emailProvider.send();
    expect(response).toEqual("sent");
  });
});

