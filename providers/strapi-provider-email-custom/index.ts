export = {
  init: (providerOptions = {}, settings = {}) => {
    return {
      send: async () => {
        return Promise.resolve("sent");
      }
    }
  }
};