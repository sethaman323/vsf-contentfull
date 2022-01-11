const config = require("./config.js");

module.exports = {
  integrations: {
    kibo: {
      location: "@vue-storefront/kibocommerce-api/server",
      configuration: {
        api: {
          accessTokenUrl: config.get("accessTokenUrl"),
          clientId: config.get("clientId"),
          sharedSecret: config.get("sharedSecret"),
          apiHost: config.get("apiHost"),
        },
      },
    },
    cntf: {
      location: "@vsf-enterprise/contentful/server",
      configuration: {
        token: "N1277InXu1aT8z_uoIj3sN4CuCerXJl_5vdwkIgmQPA",
        space: "nsson6zwcoj8",
      },
    },
  },
};
