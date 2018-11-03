<template>
  <div id="app">
    <top-header></top-header>
    <home></home>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader';
import Home from '@/components/Home';

export default {
  name: 'app',
  components: {
    TopHeader,
    Home
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Helvetica, 'Avenir', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
