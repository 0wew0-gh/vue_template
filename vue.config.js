const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "vue template";
      return args;
    });
    config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js"),
      config.plugins.delete("prefetch");
  },
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({
        resolvers: [ElementPlusResolver()],
      }),
      // require('unplugin-icons/webpack')({ resolvers: [ElementPlusResolver()], }),
      require("unplugin-auto-import/webpack")({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  publicPath: "/temp/", //打包后的文件放在服务器的哪个目录下
};
