<template>
  <div class="container">
    <div class="section">
      <ul class="pagination">
        <li :class="[canPrev?'waves-effect':'disabled']">
          <a @click="prevPage"><i class="material-icons">chevron_left</i></a>
        </li>
        <li v-for="i in maxPage" :key="i" :class="{'active':i===currentPage}">
          <a @click="changePage(i)">{{i}}</a>
        </li>
        <li :class="[canNext?'waves-effect':'disabled']">
          <a @click="nextPage"><i class="material-icons">chevron_right</i></a>
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
const pageSize = 8;
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
      .catch(e => (alert(e)))
  },
  computed: {
    maxPage() { return Math.ceil(this.blogs.length / pageSize) },
    start() { return (this.currentPage - 1) * pageSize },
    end() { return this.currentPage * pageSize },
    canPrev() { return this.currentPage !== 1 },
    canNext() { return this.currentPage !== this.maxPage },
  },
  methods: {
    changePage(n) { this.currentPage = n },
    prevPage() { if (this.canPrev) this.currentPage-- },
    nextPage() { if (this.canNext) this.currentPage++ },
  }
}
</script>