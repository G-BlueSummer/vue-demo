import Vue from 'vue'
import VueRouter from 'vue-router'

import ListPost from '@/views/ListPost.vue'
import AddPost from '@/views/AddPost.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ListPost
    },
    {
        path: '/add',
        component: AddPost
    }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router