<template>
  <div class="container">
    <div class="section">
      <form @submit.prevent="post">
        <md-field>
          <md-input id="title" v-model.lazy.trim="title" />
          <label for="title">Title</label>
        </md-field>
        <md-field>
          <md-textarea id="content" class="materialize-textarea" v-model="content"></md-textarea>
          <label for="content">Body</label>
        </md-field>
        <md-card v-if="showPreview">
          <md-card-header class="md-title">{{title}}</md-card-header>
          <md-card-content>{{content}}</md-card-content>
          <md-button type="submit" class="md-primary" v-if="!submitting">Create</md-button>
          <md-progress-spinner md-mode="indeterminate" :md-diameter="30" :md-stroke="3" v-else></md-progress-spinner>
        </md-card>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .md-progress-spinner {
    margin: 24px;
  }
</style>

<script>
  export default {
    name: "AddPost",
    data() {
      return {
        title: "",
        content: "",
        submitting: false
      };
    },
    methods: {
      post() {
        this.submitting = true;
        this.$axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            title: this.title,
            body: this.content
          })
          .then(() => this.$router.push("/"))
          .catch(e => alert(e))
          .finally(() => this.submitting = false)
      }
    },
    computed: {
      showPreview() {
        return this.title && this.content;
      }
    }
  };
</script>