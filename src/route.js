import ListPost from './components/ListPost.vue'
import AddPost from './components/AddPost.vue'

export default [
    {
        path: '/',
        component: ListPost
    },
    {
        path: '/add',
        component: AddPost
    }
]