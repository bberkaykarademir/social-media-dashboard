// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  // routeRules: {
  //   "/": { ssr: false },
  //   "/authenticatedUser": { ssr: false },
  // },
  css: ["~/assets/css/main.css"],
  nitro: {
    awsAmplify: {
      imageSettings: {
        dangerouslyAllowSVG: true,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Dedecta Dashboard",
      meta: [
        {
          name: "description",
          content: "Monitor your social media accounts easily",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  compatibilityDate: "2024-04-03",
});