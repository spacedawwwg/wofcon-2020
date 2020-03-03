<template>
  <div class="registration">
    <h1 class="mb-3">
      Tournament Registration
    </h1>
    <RegisterForm />
  </div>
</template>

<script>
  import RegisterForm from '@/components/RegisterForm.vue';

  export default {
    name: 'Registration',
    components: {
      RegisterForm
    },
    metaInfo: {
      title: 'Registration - WOFCON 2020',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'WOFCON 2020 is a Weight of Fire & Mantic Games Event being held from 18th-19th September 2020'
        },
        {
          property: 'og:url',
          content: 'https://wofcon2020.weightoffire.com/'
        },
        { property: 'og:title', content: 'Tournament(s) Registration' },
        { property: 'og:site_name', content: 'WOFCON 2020' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: 'https://wofcon2020.weightoffire.com/wofcon2020-ograph.jpg'
        },
        {
          property: 'og:description',
          content: 'A Weight of Fire & Mantic Games Event - 19th to 20th September 2020'
        }
      ]
    }
  };
</script>

<style></style>
