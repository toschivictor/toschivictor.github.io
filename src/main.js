import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import lista from './components/lista.vue'  
import detalhes from './components/detalhes.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({  
    '/': {
        component: lista
    },
    '/detalhe': {
        component: detalhes
    },
})

router.start(App, '#container')