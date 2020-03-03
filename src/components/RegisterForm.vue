<template>
  <div
    class="register-form"
    :class="{ 'register-form--submitting': submitting }"
  >
    <div class="register-form__header">
      <p class="register-form__body">
        To register, you must have already purchased a ticket for the event.
        <router-link to="/">Purchase your ticket here</router-link>.
      </p>
    </div>
    <ValidationObserver tag="div" ref="observer" v-slot="{ passes }">
      <b-form
        @submit.prevent="passes(onSubmit)"
        name="wofcon-registration"
        class="register-form__form"
        action="/thanks/"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="wofcon2020-registration" />
        <p hidden>
          <label>
            Ingnore this field if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <ValidationProvider
          class="mb-4"
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
            label-for="input-0"
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

        <div :class="{ 'is-disabled': !isValidCode }">
          <section class="mb-4">
            <h4>Attendee Details</h4>

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
            <h4>Which tournament(s) are you registering for?</h4>

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

          <ValidationProvider
            class="pt-2 mb-4"
            tag="div"
            name="Terms"
            rules="required"
            mode="lazy"
            v-slot="{ valid, errors }"
            ref="terms"
          >
            <b-form-checkbox
              id="input-3"
              autocomplete="off"
              v-model="acceptTerms"
              aria-describedby="input-3-live-feedback"
              :state="errors[0] ? false : valid ? true : null"
              value="yes"
              :unchecked-value="null"
            >
              I allow Weight of Fire to store and use my name and email to
              contact me about WOFCON.
            </b-form-checkbox>
          </ValidationProvider>

          <b-button
            type="submit"
            block
            variant="dark"
            ref="submitBtn"
            :disabled="!isValidCode"
          >
            Register
          </b-button>
        </div>
        <div class="loading" v-if="submitting">
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </b-form>
    </ValidationObserver>
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
        acceptTerms: null,
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
        ],
        error: null
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
        const requests = [
          axios.get(
            '/registration',
            this.encode({
              'form-name': 'wofcon2020-registration',
              ...this.registrationData
            }),
            {
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          ),
          axios.post(
            'https://script.google.com/macros/s/AKfycby6Rlm_3kItgvpT__ufbYKT5SB41gAF2VunQwCajcFPJFjugtw/exec',
            this.encode({
              ...this.registrationData
            })
          )
        ];
        axios
          .all(requests)
          .then(
            axios.spread((...responses) => {
              this.submitting = false;
              if (responses[0].data.error || responses[1].data.error) {
                this.error = responses[0].data.error || responses[1].data.error;
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
          )
          .catch(error => {
            this.error = error;
          });
      }
    }
  };
</script>

<style>
  .register-form {
    position: relative;
  }
  .register-form__form {
    position: relative;
    max-width: 500px;
    overflow: hidden;
    z-index: 1;
  }
  .register-form .btn-primary {
    background: #960000;
    border-color: #960000;
    color: #fff;
  }
  .register-form__header {
    border-bottom: 1px solid #ddd;
    padding: 0 0 20px;
    margin: 0 0 20px;
  }
  .register-form__header h4 {
    margin: 0;
    padding: 0;
  }
  .register-form__subtitle {
    font-size: 16px;
    color: #777;
    margin: 0;
    padding: 5px 0 0;
  }
  .register-form__body {
    font-size: 16px;
    color: #777;
    margin: 0;
    padding: 0;
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
    background: #960000;
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
