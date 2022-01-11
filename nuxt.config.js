import webpack from "webpack";
import { VSF_LOCALE_COOKIE } from "@vue-storefront/core";
import theme from "./themeConfig";

export default {
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Home Hardware",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon2.png" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "crossorigin",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap",
      },
    ],
  },
  loading: { color: "#fff" },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // to core
    "@nuxtjs/composition-api/module",
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
    ["@vue-storefront/kibocommerce/nuxt", {}],
    [
      "@vue-storefront/nuxt",
      {
        useRawSource: {
          dev: [
            "@vue-storefront/kibocommerce",
            "@vue-storefront/core",
            "@vsf-enterprise/contentful",
          ],
          prod: [
            "@vue-storefront/kibocommerce",
            "@vue-storefront/core",
            "@vsf-enterprise/contentful",
          ],
        },
      },
    ],
    ["@vue-storefront/nuxt-theme"],
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "vue-scrollto/nuxt",
    "@vue-storefront/middleware/nuxt",
    "@vsf-enterprise/contentful/nuxt",
    "cookie-universal-nuxt",
    "nuxt-i18n",
  ],
  i18n: {
    currency: "USD",
    country: "US",
    countries: [
      { name: "US", label: "United States", states: ["California", "Nevada"] },
      { name: "AT", label: "Austria" },
      { name: "DE", label: "Germany" },
      { name: "NL", label: "Netherlands" },
    ],
    currencies: [
      { name: "EUR", label: "Euro" },
      { name: "USD", label: "Dollar" },
    ],
    locales: [
      { code: "en", label: "English", file: "en.js", iso: "en" },
      { code: "de", label: "German", file: "de.js", iso: "de" },
    ],
    defaultLocale: "en",
    lazy: true,
    seo: true,
    langDir: "lang/",
    vueI18n: {
      fallbackLocale: "en",
      numberFormats: {
        en: {
          currency: {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol",
          },
        },
        de: {
          currency: {
            style: "currency",
            currency: "EUR",
            currencyDisplay: "symbol",
          },
        },
      },
      messages: {
        en: {
          welcome: "Welcome",
        },
        de: {
          welcome: "Wilkommen",
        },
      },
    },
    detectBrowserLanguage: false,
  },
  styleResources: {
    scss: [
      require.resolve("@storefront-ui/shared/styles/_helpers.scss", {
        paths: [process.cwd()],
      }),
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
      ],
    },
    transpile: ["vee-validate/dist/rules"],
    plugins: [
      new webpack.DefinePlugin({
        "process.VERSION": JSON.stringify({
          // eslint-disable-next-line global-require
          version: require("./package.json").version,
          lastCommit: process.env.LAST_COMMIT || "",
        }),
      }),
    ],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "product_search",
        path: "/p/:id",
        component: resolve(__dirname, "pages/Product.vue"),
      });
    },
    middleware: ["checkout"],
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  },
  publicRuntimeConfig: {
    theme,
  },
};