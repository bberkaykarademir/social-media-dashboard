// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
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
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@nuxt/icon", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
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
  runtimeConfig: {
    public: {
      rapidApiKey: process.env.RAPIDAPI_KEY,
      rapidApiHost: process.env.RAPIDAPI_HOST,
      rapidApiMockResponse: process.env.RAPIDAPI_MOCK_RESPONSE,
    },
  },
  compatibilityDate: "2024-04-03",
});
