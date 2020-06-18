<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="overlap">
        <md-app-toolbar class="md-primary md-large">
          <div class="md-toolbar-row">
            <md-button class="md-icon-button" to="add">
              <md-icon>add</md-icon>
            </md-button>
            <span class="md-title">Vue Demo</span>
          </div>
        </md-app-toolbar>

        <md-app-content>
          <router-view></router-view>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
  export default {
    name: 'App'
  }
</script>