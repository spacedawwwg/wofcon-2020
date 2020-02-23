<template>
  <div id="app" class="app">
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Main
    }
  };
</script>

<style>
  @font-face {
    font-family: 'Agency FB Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Agency FB Bold'), url('./assets/AGENCYB.woff') format('woff');
  }
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
    color: #a62c23 !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Agency FB Bold', sans-serif;
    text-transform: uppercase;
  }
</style>
