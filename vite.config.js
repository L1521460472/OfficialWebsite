/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-06 14:50:55
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-12 18:01:52
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require('path')
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 打包路径
  plugins: [vue()],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0', // 主机名字
    port: 8090, // 服务端口
    open: false, // 是否自动打开浏览器
    proxy: { // 代理
      // '/crm': {
      //   target: 'http://192.168.20.153:8080',
        // target: 'http://124.71.68.93:10000',
        // changeOrigin: true,
        // ws: false,
        // rewrite: path => path.replace(/^\/crm/, '')
      // },
    },
    cors: true
  },
  build:{
    assetsDir:"assets",
    rollupOptions:{
      external:[''],
      input:{
        index:path.resolve(__dirname,"index.html")
      },
      output:{
        assetFileNames: assetInfo => {
          var info = assetInfo.name.split('.')
          var extType = info[info.length - 1]
          if (
            /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
          ) {
            extType = 'media'
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = 'img'
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames:'assets/js/[name]-[hash].js',
        entryFileNames:"assets/js/[name]-[hash].js" //入口文件过大
        //assetFileNames:"assets/[ext]/name-[hash].[ext]"
      }
    }
  },
})
