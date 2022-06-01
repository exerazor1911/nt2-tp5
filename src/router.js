import Vue from 'vue'
import VueRouter from 'vue-router'

import Easy from './components/Easy'
import Hard from './components/Hard'

Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/easy'},
        {path: '/easy', component: Easy},
        {path: '/hard', component: Hard},
        {path: '*', redirect: '/' }
    ]
})