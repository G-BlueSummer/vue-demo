<template>
  <div id="app">
    <NavBar></NavBar>
    <BlogPost></BlogPost>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import BlogPost from './components/BlogPost.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    BlogPost,
    Footer,
  }
}
</script>
