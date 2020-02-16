<template>
  <div class="container">
    <div class="section">
      <form>
        <div class="input-field">
          <i class="material-icons prefix">title</i>
          <input id="title" type="text" class="validate" v-model.lazy.trim="title">
          <label for="title">Title</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">text_fields</i>
          <textarea id="content" class="materialize-textarea" v-model="content"></textarea>
          <label for="content">Body</label>
        </div>

        <div v-if="showPreview">
          <div class="card">
            <div class="card-content">
              <span class="card-title center-align">{{title}}</span>
              <p style="white-space: pre-line;">{{content}}</p>
            </div>
          </div>
          <blockquote v-if="submited">Create Successfully!</blockquote>
          <button @click.prevent="post" class="btn waves-effect waves-light" type="submit" name="action">Create
            <i class="material-icons right">send</i>
          </button>
          
        </div>
      </form>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      submited: false
    }
  },
  methods: {
    post() {
      this.submited = false;
      this.$axios.post('https://jsonplaceholder.typicode.com/posts', {
        'title': this.title,
        'body': this.content
      })
        .then( () => this.submited = true )
        .catch( e => alert(e) )
    }
  },
  computed: {
    showPreview() { return this.title && this.content }
  }
}
</script>