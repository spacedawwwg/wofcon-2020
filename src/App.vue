<template>
  <div id="app" class="app">
    <header class="header">
      <div class="header__inner">
        <img
          src="@/assets/wofcon-logo.png"
          alt="Weight of Fire - WOFCON 2020"
        />
        <p class="header__subtitle">
          19<span>th</span> – 20<span>th</span> September 2020
        </p>
        <p class="header__address">
          Mantic HQ, Nottingham
        </p>
      </div>
    </header>
    <div class="body">
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
  html,
  body {
    min-height: 100%;
  }
  html {
    background-color: #fff;
    background-color: #000;
    background-image: url('./assets/bg-2__mobile.jpg');
    background-size: cover;
    background-attachment: fixed;
  }
  @media only screen and (min-width: 750px) {
    html {
      background-image: url('./assets/bg-2.jpg');
    }
  }
  body {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: transparent !important;
    min-height: 100%;
    padding: 0;
  }
  a,
  a:hover,
  a:focus,
  a:visited,
  a:active {
    color: #a62c23 !important;
  }
  .app {
    width: 100%;
    max-width: 1000px;
  }
  @media only screen and (min-width: 750px) {
    .app {
      display: flex;
      min-height: 100%;
    }
  }
  .header {
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0 0;
    color: #fff;
  }
  @media only screen and (min-width: 750px) {
    .header {
      flex-basis: 40%;
      padding: 0 0;
    }
  }
  @media only screen and (min-width: 1000px) {
    .header {
      flex-basis: 40%;
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
  }
  .header__subtitle span {
    text-transform: lowercase;
  }
  .header__address {
    margin: 5px 0 0;
  }
  .header img {
    max-width: 150px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  @media only screen and (min-width: 750px) {
    .header img {
      max-width: 200px;
    }
  }
  @media only screen and (min-width: 1000px) {
    .header img {
      max-width: 300px;
    }
  }
  .body {
    position: relative;
    padding: 30px;
  }
  @media only screen and (min-width: 750px) {
    .body {
      flex-basis: 60%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1000px) {
    .body {
      flex-basis: 60%;
    }
  }
  .main {
    padding: 30px;
    margin: 0 auto;
    overflow: hidden;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.7);
  }
  .main__header {
    /* text-align: center; */
    border-bottom: 1px solid #ddd;
    padding: 0 0 20px;
    margin: 0 0 20px;
  }
  .main__header h4 {
    margin: 0;
    padding: 0;
  }
  .main__subtitle {
    font-size: 16px;
    color: #777;
    margin: 0;
    padding: 5px 0 0;
  }
  .main__body {
    font-size: 16px;
    color: #777;
    margin: 0;
    padding: 0;
  }
</style>
