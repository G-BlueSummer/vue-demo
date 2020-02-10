<template>
  <div class="container">
    <div class="section">
      <ul class="pagination">
        <li :class="[currentPage===1?'disabled':'waves-effect']">
          <a @click="subPage"><i class="material-icons">chevron_left</i></a>
        </li>
        <li v-for="i in maxPage" :key="i" :class="[i===currentPage?'active':'waves-effect']">
          <a>{{i}}</a>
        </li>
        <li :class="[currentPage===maxPage?'disabled':'waves-effect']">
          <a @click="addPage"><i class="material-icons">chevron_right</i></a>
        </li>
      </ul>

      <ul class="collection">
        <li class="collection-item" v-for="blog in blogs.slice(start, end)" :key="blog.id">
          <h4>{{blog.title}}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const pageSize = 10;
export default {
  data() {
    return {
      blogs: [],
      currentPage: 1,
    }
  },
  mounted() {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(r => (this.blogs = r.data))
      .catch(e => (console.error(e)))
  },
  computed: {
    maxPage() { return this.blogs.length / pageSize },
    start() { return (this.currentPage - 1) * pageSize },
    end() { return this.currentPage * pageSize },
  },
  methods: {
    addPage() { if (this.currentPage !== this.maxPage) this.currentPage++ },
    subPage() { if (this.currentPage !== 1) this.currentPage-- },
  }
}
</script>