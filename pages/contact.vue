<template>
  <main class="contact">
    <PageHeading :heading-text="heading" class="contact__header" />
    <form
      class="contact__form"
      @submit.prevent="submitForm"
      data-netlify="true"
      action="/contact"
    >
      <div
        class="contact__field"
        :class="{ 'contact__field--invalid': $v.form.name.$invalid }"
      >
        <label for="name" v-html="formTexts.name.label"></label>
        <input
          v-model="form.name"
          @blur="$v.form.name.$touch()"
          type="text"
          id="name"
        />
        <p class="contact__error" v-if="$v.form.name.$error">
          {{ formTexts.name.error }}
        </p>
      </div>
      <div
        class="contact__field"
        :class="{ 'contact__field--invalid': $v.form.email.$invalid }"
      >
        <label for="email" v-html="formTexts.email.label"></label>
        <input
          v-model="form.email"
          @blur="$v.form.email.$touch()"
          type="email"
          id="email"
        />
        <p class="contact__error" v-if="$v.form.email.$error">
          {{ formTexts.email.error }}
        </p>
      </div>
      <div
        class="contact__field"
        :class="{ 'contact__field--invalid': $v.form.subject.$invalid }"
      >
        <label for="subject" v-html="formTexts.subject.label"></label>
        <input
          v-model="form.subject"
          @blur="$v.form.subject.$touch()"
          type="text"
          id="subject"
        />
        <p class="contact__error" v-if="$v.form.subject.$error">
          {{ formTexts.subject.error }}
        </p>
      </div>
      <div
        class="contact__field"
        :class="{ 'contact__field--invalid': $v.form.message.$invalid }"
      >
        <label for="message" v-html="formTexts.message.label"></label>
        <textarea
          v-model="form.message"
          @blur="$v.form.message.$touch()"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <p class="contact__error" v-if="$v.form.message.$error">
          {{ formTexts.message.error }}
        </p>
      </div>
      <CtaButton
        :disabled="$v.form.$invalid"
        button-type="submit"
        class-modifier="positive"
        :text="formTexts.send"
      />
    </form>
    <transition name="fade">
      <ConfirmationModal
        v-if="modalIsVisible"
        :text-content="modalText"
        @click-outside="closeModal"
    /></transition>
  </main>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import { sanitize } from 'dompurify';

export default {
  head() {
    return {
      title: this.$t('contact.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.meta.description')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Marc Fairbrother | ${this.$t('contact.meta.title')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('contact.meta.description')
        }
      ]
    };
  },
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'contact' },
      fr: { slug: 'contact' }
    });
  },
  nuxtI18n: {
    paths: {
      en: '/contact',
      fr: '/contact'
    }
  },
  data() {
    return {
      heading: this.$t('contact.heading'),
      formTexts: this.$t('contact.formTexts'),
      modalText: '',
      modalIsVisible: false,
      form: {
        name: null,
        email: null,
        subject: null,
        message: null
      }
    };
  },
  validations: {
    form: {
      name: {
        required: required
      },
      email: {
        required: required,
        email: email
      },
      subject: {
        required: required
      },
      message: {
        required: required
      }
    }
  },
  methods: {
    submitForm() {
      const contactForm = document.querySelector('.contact__form');
      // sanitize form input
      const sanitizedData = {
        name: sanitize(this.form.name),
        email: sanitize(this.form.email),
        subject: sanitize(this.form.subject),
        message: sanitize(this.form.message)
      };
      // post url encoded data
      fetch(contactForm.getAttribute('action'), {
        method: 'POST',
        headers: {
          Accept: 'application/x-www-form-urlencoded;charset=UTF-8',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams(sanitizedData).toString()
      })
        .then(() => {
          // display confirmation modal
          this.displayModal(this.formTexts.confirmation);
          // reset form
          this.resetForm();
        })
        .catch(() => {
          // display error modal
          this.displayModal(this.formTexts.error);
        });
    },
    resetForm() {
      this.form.name = null;
      this.form.email = null;
      this.form.subject = null;
      this.form.message = null;
      this.$v.form.$reset();
    },
    displayModal(textContent) {
      // update modal text content
      this.modalText = textContent;
      // display modal
      this.modalIsVisible = true;
    },
    closeModal() {
      this.modalIsVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}
.contact {
  padding: 0 15px;
  @include breakpoint($tablet-width) {
    padding: 0 30px;
  }
  @include breakpoint($desktop-width) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto auto 30px;
    margin: 0 auto 60px;
    max-width: 1280px;
    padding: 0 30px;
    width: 100%;
    &::before {
      border-bottom: solid 2px var(--accentColor);
      border-top: solid 2px var(--accentColor);
      content: '';
      grid-column: 4/8;
      grid-row: 2;
      margin: 30px 30px 0 90px;
      pointer-events: none;
      z-index: 0;
    }
    &::after {
      background: var(--mainTextColor);
      border-radius: 4px;
      content: '';
      grid-column: 4/8;
      grid-row: 1/4;
      margin-left: 60px;
      margin-top: 180px;
      z-index: -10;
    }
  }
  &__header {
    @include breakpoint($tablet-width) {
      width: 75%;
    }
    @include breakpoint($desktop-width) {
      grid-column: 1/4;
      grid-row: 1;
      width: 100%;
    }
  }
  &__form {
    margin-top: 30px;
    @include breakpoint($desktop-width) {
      border: solid 2px var(--mainTextColor);
      border-radius: 4px;
      display: grid;
      grid-column: 1/9;
      grid-row: 2;
      grid-template-columns: repeat(8, 1fr);
      padding-top: 60px;
    }
  }
  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    @include breakpoint($desktop-width) {
      display: grid;
      grid-column: 2/7;
      grid-template-columns: repeat(5, 1fr);
      position: relative;
      &::before {
        background: var(--mainBg);
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 10px;
        position: absolute;
        right: -25px;
        bottom: 16px;
        width: 10px;
      }
      &:last-of-type {
        &::before {
          bottom: 150px;
        }
      }
      &--invalid {
        &::before {
          background: var(--accentColor);
        }
      }
    }
    & > label {
      font-size: 1rem;
      line-height: 1.45;
      margin-bottom: 10px;
      @include breakpoint($tablet-width) {
        font-size: 1.2rem;
      }
      @include breakpoint($desktop-width) {
        grid-column: 1/3;
        grid-row: 1;
      }
    }
    & > input {
      background: var(--mainBg);
      border: solid 1px var(--mainTextColor);
      border-radius: 4px;
      font-size: 1rem;
      line-height: 1.45;
      padding: 5px;
      @include breakpoint($tablet-width) {
        font-size: 1.2rem;
      }
      @include breakpoint($desktop-width) {
        grid-column: 1/6;
        grid-row: 2;
        padding: 10px;
      }
      &:focus {
        border-color: var(--accentColor);
        outline: none;
      }
    }
    & > textarea {
      background: var(--mainBg);
      border: solid 1px var(--mainTextColor);
      border-radius: 4px;
      font-size: 1rem;
      line-height: 1.45;
      padding: 5px 5px 10px;
      @include breakpoint($tablet-width) {
        font-size: 1.2rem;
      }
      @include breakpoint($desktop-width) {
        grid-column: 1/6;
        grid-row: 2;
        padding: 10px;
      }
      &:focus {
        border-color: var(--accentColor);
        outline: none;
      }
    }
    &:last-of-type {
      position: relative;
      @include breakpoint($tablet-width) {
        margin-bottom: 45px;
      }
      &::after {
        background: var(--mainBg);
        border-radius: 0 0 4px 0;
        bottom: 1px;
        content: '';
        display: inline-block;
        height: 10px;
        pointer-events: none;
        position: absolute;
        right: 1px;
        width: 10px;
        z-index: 10;
      }
    }
  }
  &__error {
    font-size: 0.8rem;
    margin-top: 10px;
    text-decoration: underline;
    text-decoration-color: var(--accentColor);
    text-decoration-thickness: 2px;
    @include breakpoint($tablet-width) {
      margin-top: 15px;
    }
    @include breakpoint($desktop-width) {
      color: var(--altTextColor);
      grid-column: 3/6;
      grid-row: 1;
      margin-left: 90px;
      margin-top: 8px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out 0.1s;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}
</style>
