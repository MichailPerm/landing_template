module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/variables.scss";
          @import "@/assets/mixins.scss";
        `
      }
    }
  }
};