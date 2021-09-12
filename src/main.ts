// const root = document.getElementById('root')
// root.textContent = '你妈贵姓？'
import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import App from './App.vue' // 引入 APP 页面组建
import router from "../route";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
<<<<<<< HEAD
import '@babel/polyfill'
=======
>>>>>>> a34dbdda9dc26d2fe34602ce10896918b40785b8


// @ts-ignore
const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount('#app')
