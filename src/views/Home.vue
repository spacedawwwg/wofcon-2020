<template>
  <div class="home">
    <h1 class="mb-3">
      Welcome to WOFCON 2020
    </h1>
    <p>
      Its Back and better than ever! This year we have been invited to host
      WOFCON at Mantic Games HQ in Nottingham, UK so we couldn't possibly
      refuse.
    </p>
    <h2 class="pt-2">What is WOFCON?</h2>
    <p>
      WOFCON is the Mantic Games centric event organised by the Weight of Fire
      team. A relaxed and fun atmosphere with multiple tournaments running over
      the course of a weekend.
    </p>
    <h2 class="pt-2">What's Included/Happening?</h2>
    <ul class="mb-4">
      <li>Goody bag for every attendee</li>
      <li>Free gaming all day on the Friday until 10pm</li>
      <li>
        Food (lunch on Saturday and Sunday and dinner Saturday night) and drink
        (soft and strong) all weekend.
      </li>
      <li>
        Sneak peeks of upcoming Mantic releases and more (trust us there is some
        great stuff, we just cant talk about it right now!).
      </li>
      <li>
        If you are hanging around in Nottingham then some of the Weigth of Fire
        crew will be doing a little gaming related tourism on the Monday if
        you'd like to join us. Fire us an email at
        <a href="mailto:hello@weightoffire.com">hello@weightoffire.com</a> to
        find out more of what we have planned.
      </li>
    </ul>
    <h2 class="pt-2">Weekend Format &amp; Schedule</h2>
    <b-list-group class="mb-4">
      <b-list-group-item>
        Friday 2-10pm: Free Gaming and Social
      </b-list-group-item>
      <b-list-group-item>
        Saturday 9am-5pm: Deadzone UK National Tournament
      </b-list-group-item>
      <b-list-group-item>
        Saturday 6pm-11pm: Dreadball Tournament
      </b-list-group-item>
      <b-list-group-item>
        Sunday 9am-5pm: Kings of War Vanguard Tournament
      </b-list-group-item>
    </b-list-group>
    <h2 class="pt-2">Tickets</h2>
    <b-list-group class="mb-4">
      <b-list-group-item>
        Full Weekend Pass (Saturday AND Sunday)
        <a class="buy-btn" href="https://paypal.me/weightoffire/35">
          &pound;35 - Buy Now
        </a>
      </b-list-group-item>
      <b-list-group-item>
        Day Pass (Saturday OR Sunday)
        <a class="buy-btn" href="https://paypal.me/weightoffire/25">
          &pound;25 - Buy Now
        </a>
      </b-list-group-item>
      <b-list-group-item>
        Dreadball Tournament (Saturday Evening)
        <a class="buy-btn" href="https://paypal.me/weightoffire/15">
          &pound;15 - Buy Now
        </a>
      </b-list-group-item>
    </b-list-group>

    <h2 class="pt-2">Sponsors</h2>
    <p>
      Prize support is made possible by our amazing sponsors. Please take a
      minute to check out their websites:
    </p>

    <ul class="sponsors">
      <li class="sponsors__sponsor sponsors__sponsor--mantic">
        <a href="https://www.manticgames.com/" target="_blank">
          <img src="/logo-mantic_000000.png" alt="Mantic" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--deepcutstudios">
        <a href="https://www.deepcutstudio.com/" target="_blank">
          <img src="/logo-deepcutstudios.png" alt="Deep Cut Studios" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--gamemateu">
        <a href="https://www.gamemat.eu/" target="_blank">
          <img src="/logo-gamemateu.png" alt="Gamemat.eu" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--krmulticase">
        <a href="https://krmulticase.com/" target="_blank">
          <img src="/logo-krmulticase.png" alt="KR Multicase" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--kromlech">
        <a href="https://www.kromlech.eu/" target="_blank">
          <img src="/logo-kromlech.png" alt="Kromlech" />
        </a>
      </li>
    </ul>
    <p>
      If you would like to sponsor our event, please get in touch:
      <a href="mailto:hello@weightoffire.com">hello@weightoffire.com</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'home',
    metaInfo: {
      title: 'WOFCON 2020 - A Mantic Weekend Gaming Event',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    }
  };
</script>

<style scoped>
  .buy-btn {
    display: block;
    margin-top: 5px;
  }
  @media only screen and (min-width: 750px) {
    .buy-btn {
      float: right;
      margin-top: 0;
    }
  }

  .sponsors {
    list-style: none;
    margin: 0 auto 30xp;
    padding: 0;
    overflow: hidden;
    text-align: center;
  }

  .sponsors__sponsor {
    margin: 0;
    padding: 0 0 0 30px;
    max-width: 45%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 15px;
  }

  .sponsors__sponsor:first-child {
    padding-left: 0;
  }

  .sponsors__sponsor img {
    max-width: 100%;
    height: auto;
    width: auto;
    max-height: 150px;
  }

  .sponsors__sponsor--deepcutstudios img {
    max-height: 90px;
  }

  .sponsors__sponsor--gamemateu img {
    max-height: 110px;
  }

  .sponsors__sponsor--krmulticase img {
    max-height: 110px;
  }

  .sponsors__sponsor--kromlech img {
    max-height: 120px;
  }
</style>
