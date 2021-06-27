import Vue from 'vue';
import VueRouter from 'vue-router';
import Character from '../views/Character.vue';
import History from '../views/History.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/character',
    name: 'Character',
    component: Character
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
