import { createApp } from 'vue'
import App from './App.vue'
import LandingPage from './components/LandingPage.vue'
import ButtonPage from './components/ButtonPage.vue'
import IdPage from './components/IdPage.vue'

const routes = [
    {path: '/', component: LandingPage}
]

createApp(App).mount('#app')
