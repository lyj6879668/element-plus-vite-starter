import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import {resolve} from 'path'
import settings from './src/settings'

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })
  ],
  base: process.env.NODE_ENV == 'production'?'/web/':'',
  resolve: {
    alias: {
      '@': resolve(__dirname,'src')
    },
  },
  server: {
    https: false,
    proxy: {
      [settings.envContext]: {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(settings.envContext,'g'),settings.envContext)
      }
    }
  }
})
