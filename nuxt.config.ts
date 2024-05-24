// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    // Will be available in both server and client
    jwtAccessToken: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshToken: process.env.JWT_REFRESH_TOKEN_SECRET,
  },
});
