<template>
  <div class="container">
    <div class="section">
      <ul class="collection">
        <li class="collection-item" v-for="blog in blogs" v-bind:key="blog.id">
          <h4>{{blog.title}}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(r => (this.blogs = r.data))
      .catch(e => (console.error(e)))
  },
}
</script>