<template>
  <div class="thanks">
    <p>Thanks, {{ theName }}!</p>
    <p>We're looking forward to seeing you on the 19th-20th September.</p>
    <img src="@/assets/scarecrow.jpg" alt="Scarecrow" class="main__image" />
    <p>
      If you need to make changes, feel free to edit your registration up to two
      weeks before the event. For more information email
      <a href="mailto:hello@weightoffire.com">hello@weightoffire.com</a>
    </p>
    <div class="social">
      <a
        href="https://www.facebook.com/events/561636417895326"
        class="facebook-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'thanks',
    metaInfo: {
      title: 'WOFCON 2020 - Thanks',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    props: ['name'],
    computed: {
      theName() {
        return this.name ? this.name : this.$route.query.name;
      }
    }
  };
</script>

<style scoped>
  .social {
    text-align: center;
    padding-top: 20px;
  }
  .facebook-link {
    display: inline-block;
    text-decoration: none;
    fill: #1778f2;
  }
  .main__image {
    max-width: 365px;
    height: auto;
    display: block;
    margin: 0 auto 20px;
  }
</style>
