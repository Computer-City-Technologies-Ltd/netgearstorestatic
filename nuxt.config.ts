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
  ],

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
    name: "Netgear Store Bangladesh",
    description: "Welcome to Netgear Store Bangladesh",
    defaultLocale: "en",
  },

  // theme: {
  //   fontFamily: {
  //     inter: "Outfit",
  //   },
  // },

  // nitro: {
  //   prerender: {
  //     routes: ["/", "/categories"],
  //     crawlLinks: false, // IMPORTANT
  //   },
  // },
});
