<template>
  <div class="registration">
    <h1 class="mb-3">
      Tournament Registration
    </h1>
    <RegisterForm />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '@/components/RegisterForm.vue'

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
    }
  }
}
</script>

<style>

</style>
