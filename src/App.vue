<template>
  <div id="app">
    <navigation></navigation>
    <div class="wrapper">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  @import "scss/default.scss";
</style>
