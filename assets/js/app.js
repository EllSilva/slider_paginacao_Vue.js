import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
//Vue.use(VueMask.VueMaskPlugin);

import carousel from './components/Carousel.js'
Vue.component('c-carousel', carousel)

import carouselitem from './components/Carouselitem.js'
Vue.component('c-carouselitem', carouselitem)

import carouselcontrols from './components/CarouselControls.js'
Vue.component('c-carouselcontrols', carouselcontrols)

import carouselindicators from './components/CarouselIndicators.js'
Vue.component('c-carouselindicators', carouselindicators)


import page_home from './view/home/home.js'
Vue.component('p-home', page_home)


 

Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
 
]



const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()