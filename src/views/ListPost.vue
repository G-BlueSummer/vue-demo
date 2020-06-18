<template>
  <div class="container">
    <div class="section">
      <md-progress-bar md-mode="indeterminate" v-if="loading"></md-progress-bar>
      <div v-else>
        <md-button :disabled="!canPrev" @click="prevPage" class="md-icon-button md-primary">
          <md-icon>chevron_left</md-icon>
        </md-button>
        <md-button v-for="i in maxPage" :key="-i" :disabled="i===currentPage"
          @click="changePage(i)" class="md-icon-button md-primary">
          {{i}}
        </md-button>
        <md-button :disabled="!canNext" @click="nextPage" class="md-icon-button md-primary">
          <md-icon>chevron_right</md-icon>
        </md-button>

        <md-card md-with-hover v-for="blog in blogs.slice(start, end)" :key="blog.id">
          <md-card-header>
            <div class="md-title">{{blog.title}}</div>
            <p>{{users[blog.userId-1].name}}</p>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>

<script>
  const pageSize = 8;
  export default {
    name: 'ListPost',
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
          (users, posts) => {
            this.blogs = posts.data;
            this.users = users.data;
          }
        ))
        .catch(e => alert(e))
        .finally(() => this.loading = false)
    },
    computed: {
      maxPage() {
        return Math.ceil(this.blogs.length / pageSize)
      },
      start() {
        return (this.currentPage - 1) * pageSize
      },
      end() {
        return this.currentPage * pageSize
      },
      canPrev() {
        return this.currentPage !== 1
      },
      canNext() {
        return this.currentPage !== this.maxPage
      }
    },
    methods: {
      changePage(n) {
        this.currentPage = n
      },
      prevPage() {
        if (this.canPrev) this.currentPage--
      },
      nextPage() {
        if (this.canNext) this.currentPage++
      },
    }
  }
</script>