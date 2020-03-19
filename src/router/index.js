import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const ListArticle = () => import('../views/ListArticle')
const CreateArticle = () => import('../views/CreateArticle')
const EditArticle = () => import('../views/EditArticle')

const routes = [
  {
    path: '/',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    component: ListArticle
  },
  {
    path: '/articles/create',
    component: CreateArticle
  },
  {
    path: '/articles/edit/:id',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
