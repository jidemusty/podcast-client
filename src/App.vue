<template>
  <div id="app">
    <top-header></top-header>
    <div class="container">
      <home></home>
    </div>
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
  @import '~@/assets/sass/variables';

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, 'Avenir', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #EDEFF0;
    margin-top: calc(#{$header-height} + 40px);
  }

  p {
    line-height: 1.5;
  }

  a {
    color: rgba(#387BC9, .9);
    transition: color 100ms ease-in;

    &:hover {
      color: #387BC9;
    }
  }

  .container {
    max-width: 780px;
    margin: 0 auto;
    flex: 1;
  }
</style>
