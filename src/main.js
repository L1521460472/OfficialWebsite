/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-06 14:50:54
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-10 18:22:23
 */
import { createApp } from 'vue'
import router from '@/router'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
