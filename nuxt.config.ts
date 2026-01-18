// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-easy-lightbox",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@nuxtjs/robots",
    "@netlify/nuxt",
    "nuxt-meilisearch",
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  sitemap: {
    discoverImages: true,
    zeroRuntime: true,
  },

  router: {
    options: {
      strict: true,
    },
  },

  image: {
    provider: "netlify",
    domains: ["admindash.comcitybd.com"], // Add your external domains here
    // other options like formats, quality, etc.
  },

  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "/assets/css/site.css" },
        { rel: "icon", type: "image/ico", href: "/assets/images/favicon.ico" },
      ],
      script: [
        {
          src: "https://tianji.comcitybd.net/tracker.js",
          async: true,
          defer: true,
          "data-website-id": "cmkchxu0q0aaror6bx8m9movl",
        },
      ],
    },
  },

  site: {
    url: "https://netgearstore.netlify.app/",
    name: "Netgear Bangladesh",
    description: "Welcome to Netgear Bangladesh",
    defaultLocale: "en",
  },

  plugins: ["~/plugins/crypto-polyfill.client"],

  meilisearch: {
    hostUrl: "https://quick.comcitybd.com/", //required
    searchApiKey: "RRrpdBf6vRrp2nJbWQGZWVwg5LGITU0P", // required
    adminApiKey: "RRrpdBf6vRrp2nJbWQGZWVwg5LGITU0P", // optional
    serverSideUsage: true, // default: false
  },
});
