const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //   css: {
  //       loaderOptions: {
  //           postcss: {
  //               plugins: [
  //                   require('postcss-pxtorem')({
  //                       rootValue : 37.5, 
  //                       propList   : ['*'],
  //                   }),
  //               ]
  //           }
  //       }
  //   },
})
