<template>
  <div
    class="register-form"
    :class="{ 'register-form--submitting': submitting }"
  >
    <div class="main__header">
      <p class="main__body">
        To register, you must have already purchased a ticket for the event.
        Visit our
        <a href="https://www.facebook.com/events/561636417895326">
          Facebook event page
        </a>
        to find out how.
      </p>
    </div>
    <ValidationObserver tag="div" ref="observer" v-slot="{ passes }">
      <b-form @submit.prevent="passes(onSubmit)" name="wofcon-registration">
        <div class="mb-4">
          <ValidationProvider
            tag="div"
            name="Code"
            rules="required|numeric|isValidCode"
            mode="lazy"
            v-slot="{ valid, errors }"
            ref="code"
          >
            <b-form-group
              id="input-group-0"
              label="Registration Code"
              description="4-digit code emailed to you after payment"
              label-for="input-1"
            >
              <b-form-input
                id="input-0"
                autocomplete="off"
                v-model="registrationData.code"
                placeholder="Enter code (e.g. 1234)"
                aria-describedby="input-0-live-feedback"
                :state="errors[0] ? false : valid ? true : null"
                maxlength="4"
              />
              <b-form-invalid-feedback id="input-0-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
        </div>

        <div :class="{ 'is-disabled': !isValidCode }">
          <section class="mb-4">
            <h5>Attendee Details</h5>

            <ValidationProvider
              tag="div"
              name="Name"
              rules="required"
              mode="lazy"
              v-slot="{ valid, errors }"
              ref="name"
            >
              <b-form-group
                id="input-group-1"
                label="Full name"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="registrationData.name"
                  placeholder="Enter your full name"
                  aria-describedby="input-1-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                  :disabled="!isValidCode"
                />
                <b-form-invalid-feedback id="input-1-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider
              tag="div"
              name="Email"
              rules="required|email"
              mode="lazy"
              v-slot="{ valid, errors }"
              ref="email"
            >
              <b-form-group
                id="input-group-2"
                label="Email address"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="registrationData.email"
                  type="email"
                  placeholder="Enter your email"
                  aria-describedby="input-2-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                  :disabled="!isValidCode"
                />
                <b-form-invalid-feedback id="input-2-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </section>

          <section class="mb-4">
            <h5>Which tournament(s) are you registering for?</h5>

            <ValidationProvider
              tag="div"
              name="Deadzone"
              rules="required"
              mode="lazy"
              v-slot="{ valid, errors }"
            >
              <b-form-group
                label="Deadzone (Saturday Day)"
                label-for="radio-group-1"
              >
                <b-form-radio-group
                  id="radio-group-1"
                  name="radio-group-1"
                  v-model="registrationData.deadzone"
                  aria-describedby="radio-group-1-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                  :options="options"
                  :disabled="!isValidCode"
                />
                <b-form-invalid-feedback
                  id="radio-group-1-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                >
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider
              tag="div"
              name="Dreadball"
              rules="required"
              mode="lazy"
              v-slot="{ valid, errors }"
            >
              <b-form-group
                label="Dreadball (Saturday Night)"
                label-for="radio-group-2"
              >
                <b-form-radio-group
                  id="radio-group-2"
                  name="radio-group-2"
                  v-model="registrationData.dreadball"
                  aria-describedby="radio-group-2-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                  :options="options"
                  :disabled="!isValidCode"
                />
                <b-form-invalid-feedback
                  id="radio-group-2-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                >
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider
              tag="div"
              name="Vanguard"
              rules="required"
              mode="lazy"
              v-slot="{ valid, errors }"
            >
              <b-form-group
                label="Vanguard (Sunday Day)"
                label-for="radio-group-3"
              >
                <b-form-radio-group
                  id="radio-group-3"
                  name="radio-group-3"
                  v-model="registrationData.vanguard"
                  aria-describedby="radio-group-3-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                  :options="options"
                />
                <b-form-invalid-feedback
                  id="radio-group-3-live-feedback"
                  :state="errors[0] ? false : valid ? true : null"
                >
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </section>

          <b-button
            type="submit"
            block
            variant="dark"
            class="float-right"
            ref="submitBtn"
            :disabled="!isValidCode"
          >
            Register
          </b-button>
        </div>
      </b-form>
    </ValidationObserver>
    <div class="loading" v-if="submitting">
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
  import { required, email, numeric } from 'vee-validate/dist/rules';
  import axios from 'axios';
  import { codes } from '../../codes';

  const isValidCode = value => {
    for (var i = 0; i < codes.length; i++) {
      if (parseInt(codes[i], 10) === parseInt(value, 10)) return true;
    }
    return false;
  };

  extend('isValidCode', {
    validate: isValidCode,
    message: `You must enter a valid code (double check your code)`,
    immediate: false
  });

  extend('required', {
    ...required,
    message: 'This field is required'
  });

  extend('email', {
    ...email,
    message: 'This field must be a valid email'
  });

  extend('numeric', {
    ...numeric,
    message: 'This field must be numeric'
  });

  export default {
    name: 'RegisterForm',
    components: {
      ValidationObserver,
      ValidationProvider
    },
    data() {
      return {
        submitting: false,
        registrationData: {
          code: null,
          name: null,
          email: null,
          deadzone: null,
          vanguard: null,
          dreadball: null
        },
        options: [
          { text: 'Yes', value: 'Yes' },
          { text: 'No', value: 'No' }
        ]
      };
    },
    computed: {
      isValidCode() {
        return isValidCode(this.registrationData.code);
      },
      theCode() {
        return this.$route.query.code || null;
      },
      theName() {
        return this.$route.query.name || null;
      },
      theEmail() {
        return this.$route.query.email || null;
      }
    },
    mounted() {
      this.registrationData.code = this.theCode;
      this.registrationData.name = this.theName;
      this.registrationData.email = this.theEmail;
      this.$nextTick(() => {
        if (this.registrationData.code) this.$refs.code.validate();
        if (this.registrationData.name) this.$refs.name.validate();
        if (this.registrationData.email) this.$refs.email.validate();
      });
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join('&');
      },
      onSubmit() {
        this.submitting = true;
        this.$refs.submitBtn.blur();
        console.log(this.registrationData);
        axios
          .post(
            'https://script.google.com/macros/s/AKfycby6Rlm_3kItgvpT__ufbYKT5SB41gAF2VunQwCajcFPJFjugtw/exec',
            this.encode(this.registrationData)
          )
          .then(response => {
            this.submitting = false;
            if (response.data.error) {
              console.error(response.data.error);
              window.alert('Sorry, there was an error');
              return;
            }
            this.$router.push({
              name: 'thanks',
              params: {
                name: this.registrationData.name
              },
              query: {
                name: this.registrationData.name
              }
            });
          })
          .catch(error => {
            console.error(error);
            this.errored = true;
          });
      }
    }
  };
</script>

<style>
  .register-form {
    width: 100%;
    float: left;
    position: relative;
  }
  .register-form form {
    position: relative;
    z-index: 1;
  }
  .register-form .btn-primary {
    background: #e53e3e;
    border-color: #e53e3e;
    color: #fff;
  }
  .is-disabled {
    opacity: 0.2;
    pointer-events: none;
  }
  .loading {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
  }
  .loader {
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    top: 50%;
    left: 50%;
    margin: -32px 0 0 -32px;
  }
  .loader div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #e53e3e;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .loader div:nth-child(1) {
    left: 6px;
    animation: loading1 0.6s infinite;
  }
  .loader div:nth-child(2) {
    left: 6px;
    animation: loading2 0.6s infinite;
  }
  .loader div:nth-child(3) {
    left: 26px;
    animation: loading2 0.6s infinite;
  }
  .loader div:nth-child(4) {
    left: 45px;
    animation: loading3 0.6s infinite;
  }
  @keyframes loading1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes loading3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes loading2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
</style>
