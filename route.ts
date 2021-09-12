import {createRouter,createMemoryHistory} from 'vue-router'


import login from "./src/components/Login.vue"
import hello from "./src/components/HelloWorld.vue"


const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: login },
        { path: '/hello', component: hello }
    ],
})

export default router