<template>
  <div id="app" class="app">
    <Cancelled />
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Cancelled from './components/Cancelled.vue';
  import Main from './components/Main.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Main,
      Cancelled
    }
  };
</script>

<style>
  @import url("https://use.typekit.net/pha2ybg.css");
  
  @media only screen and (min-width: 1000px) {
    html,
    body {
      height: 100%;
      overflow: hidden;
    }
  }
  a,
  a:hover,
  a:focus,
  a:visited,
  a:active {
    color: #960000 !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: din-condensed, sans-serif;
    text-transform: uppercase;
  }
</style>
