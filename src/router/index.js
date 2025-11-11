import { createRouter, createMemoryHistory } from 'vue-router'

import ButtonPage from '@/components/ButtonPage.vue'
import LandingPage from '@/components/LandingPage.vue'
import IdPage from '@/components/IdPage.vue'

const routes = [
    { path: '/', component: LandingPage},
    { path: '/testing', component: ButtonPage},
    { path: '/test/:id', component: IdPage},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router