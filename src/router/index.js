import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import HomeMain from "../views/Home/Children/main.vue";
import Doctors from "../views/Home/Children/doctors.vue";
import Services from "../views/Home/Children/services.vue";
import Error from "../views/404.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HomeMain',
        component: HomeMain
      },
      {
        path: '/doctors',
        name: "Doctors",
        component: Doctors
      },
      {
        path: '/services',
        name: "Services",
        component: Services
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
