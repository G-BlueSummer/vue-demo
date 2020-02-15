<template>
  <div id="app">
    <NavBar></NavBar>
    <PostList></PostList>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import PostList from './components/PostList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    PostList,
    Footer,
  }
}
</script>
