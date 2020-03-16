<template>
  <div class="container">
    <div class="section">
      <div class="progress" v-if="loading">
          <div class="indeterminate"></div>
      </div>
      <div v-else>
        <ul class="pagination">
          <li :class="[canPrev?'waves-effect':'disabled']">
            <a @click="prevPage"><i class="material-icons">chevron_left</i></a>
          </li>
          <li v-for="i in maxPage" :key="i" :class="[i===currentPage?'active':'waves-effect']">
            <a @click="changePage(i)">{{i}}</a>
          </li>
          <li :class="[canNext?'waves-effect':'disabled']">
            <a @click="nextPage"><i class="material-icons">chevron_right</i></a>
          </li>
        </ul>
      
        <div class="card hoverable" v-for="blog in blogs.slice(start, end)" :key="blog.id">
          <div class="card-content">
            <span class="card-title">{{blog.title}}</span>
            <p>{{users[blog.userId-1].name}}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="fixed-action-btn">
      <router-link to="/add" class="btn-floating btn-large">
        <i class="large material-icons">mode_edit</i>
      </router-link>
    </div>
  </div>
</template>

<script>
const pageSize = 8;
export default {
  data() {
    return {
      blogs: [],
      users: [],
      currentPage: 1,
      loading: true,
    }
  },
  mounted() {
    const axios = this.$axios;
    axios.all([
      axios.get('http://jsonplaceholder.typicode.com/users'),
      axios.get('http://jsonplaceholder.typicode.com/posts'),
      ])
      .then(axios.spread(
        (users, posts)=>{ this.blogs=posts.data; this.users=users.data; }
        ))
      .catch( e => alert(e) )
      .finally( () => this.loading = false )
  },
  computed: {
    maxPage() { return Math.ceil(this.blogs.length / pageSize) },
    start() { return (this.currentPage - 1) * pageSize },
    end() { return this.currentPage * pageSize },
    canPrev() { return this.currentPage !== 1 },
    canNext() { return this.currentPage !== this.maxPage }
  },
  methods: {
    changePage(n) { this.currentPage = n },
    prevPage() { if (this.canPrev) this.currentPage-- },
    nextPage() { if (this.canNext) this.currentPage++ },
  }
}
</script>