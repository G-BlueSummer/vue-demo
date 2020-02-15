import PostList from './components/PostList.vue'
import AddPost from './components/AddPost.vue'

export default [
    {
        path: '/',
        component: PostList
    },
    {
        path: '/add',
        component: AddPost
    }
]