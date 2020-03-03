<template>
  <header class="header">
    <div class="header__inner">
      <router-link to="/">
        <img
          src="@/assets/wofcon-logo.png"
          alt="Weight of Fire - WOFCON 2020"
        />
      </router-link>
      <p class="header__subtitle">
        19<span>th</span> – 20<span>th</span> September 2020
      </p>
      <p class="header__address">
        Mantic HQ, Nottingham
      </p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  };
</script>

<style scoped>
  .header {
    background-color: #960000;
    background-image: url('../assets/bg--mobile.jpg');
    background-size: cover;
    background-position: 50% 50%;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  @media only screen and (min-width: 1000px) {
    .header {
      width: 40%;
      height: 100vh;
      background-image: url('../assets/bg--desktop.jpg');
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  .header__inner {
    max-width: 300px;
  }

  .header__subtitle {
    text-align: center;
    padding-top: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    margin: 0;
    font-family: din-condensed, sans-serif;
  }

  @media only screen and (min-width: 750px) {
    .header__subtitle {
      font-size: 24px;
    }
  }

  .header__subtitle span {
    text-transform: lowercase;
  }

  .header__address {
    margin: 5px 0 0;
  }

  .header img {
    max-width: 125px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  @media only screen and (min-width: 750px) {
    .header img {
      max-width: 175px;
    }
  }

  @media only screen and (min-width: 1000px) {
    .header img {
      max-width: 300px;
    }
  }
</style>
