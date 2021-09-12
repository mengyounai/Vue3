// const root = document.getElementById('root')
// root.textContent = '你妈贵姓？'
import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import App from './App.vue' // 引入 APP 页面组建
import router from "../route";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@babel/polyfill'


// @ts-ignore
const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount('#app')
