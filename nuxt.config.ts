// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'node',
  },
  devServer: {
    host: '0.0.0.0',
  },
  srcDir: 'src',
  typescript: {
    tsConfig: {
      extends: '@tsconfig/strictest/tsconfig.json',
    },
  },
});
