<template>
  <div class="cancelled">
    <div class="cancelled__message">
      <img src="@/assets/cancelled.png" alt="Cancelled" />
      <p>
        Unfortunately, due to COVID-19, WoFCON 2020 has been cancelled.
      </p>
      <p>
        If you have already purchased a ticket, please contact
        hello@weightoffire.com for a refund.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cancelled',
  };
</script>

<style>
  html,
  body {
    height: 100vh;
    height: --webkit-fill-available;
  }

  .cancelled {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
  }

  .cancelled__message {
    text-align: center;
  }

  .cancelled__message img {
    display: inline-block;
    width: 90%;
    height: auto;
    max-width: 1024px;
    margin-bottom: 30px;
  }
</style>
