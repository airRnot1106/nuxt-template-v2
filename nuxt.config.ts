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
      compilerOptions: {
        noImplicitReturns: false, // For middleware
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  tailwindcss: {
    exposeConfig: true,
    configPath: 'tailwind.config',
  },
});
