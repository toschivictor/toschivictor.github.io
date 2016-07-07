import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import List from './components/lista.vue'  
import Details from './components/detalhes.vue'

Vue.use(VueResource)
Vue.use(VueRouter)


const router = new VueRouter()

router.map({  
    '/': {
        component: List
    },
    '/detalhe/:shotId': {
        component: Details
    }
})

router.start(App, '#container')