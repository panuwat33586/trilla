import Vue from 'vue'
import VueRouter from 'vue-router'
import TrillaBoard from '../views/TrillaBoard.vue'
import Modal from '../components/Modal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TrillaBoard',
    component: TrillaBoard,
    children:[
      {
        path:'task/:id',
        name:'task',
        component:Modal
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
