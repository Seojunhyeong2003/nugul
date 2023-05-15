const { defineConfig } = require('@vue/cli-service')

var path = require('path');

module.exports = defineConfig({
  outputDir : path.resolve("../back/public"),
  devServer:{
    proxy:{
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite:{
          "^api" : ''
        }
      }
    }
  },
  lintOnSave: false,
  transpileDependencies: true,
})