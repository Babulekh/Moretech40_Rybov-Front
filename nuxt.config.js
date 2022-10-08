export default {
  target: "server",
  head: {
    title: "VTB NFT Store",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [{ src: "@/static/styles/generalStyles.scss", lang: "scss" }],
  styleResources: {
    scss: [
      "@/static/styles/variables/colors.scss",
      "@/static/styles/variables/devices.scss",
    ],
  },
  plugins: [
    { src: "~/plugins/vuelidate" },
    //{ src: "~/plugins/persistedstate.js" },
  ],
  components: true,
  buildModules: ["@nuxtjs/style-resources"],
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],
  axios: {
    baseURL: "/",
  },
  router: {
    base: "/",
  },
  dev: false,
};
