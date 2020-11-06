<template>
  <main class="contact">
    <PageHeading :heading-text="heading" class="contact__header" />
    <form
      class="contact__form"
      @submit.prevent="submitForm"
      data-netlify="true"
      action="/contact"
    >
      <div class="contact__field">
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
      <div class="contact__field">
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
      <div class="contact__field">
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
      <div class="contact__field">
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
        @clickOutside="closeModal"
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
  &__form {
    margin-top: 30px;
  }
  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    & > label {
      font-size: 1rem;
      line-height: 1.45;
      margin-bottom: 10px;
    }
    & > input {
      background: var(--mainBg);
      border: solid 1px var(--mainTextColor);
      border-radius: 4px;
      font-size: 1rem;
      line-height: 1.45;
      padding: 5px;
    }
    & > textarea {
      background: var(--mainBg);
      border: solid 1px var(--mainTextColor);
      border-radius: 4px;
      font-size: 1rem;
      line-height: 1.45;
      padding: 5px 5px 10px;
    }
    &:last-of-type {
      position: relative;
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
      }
    }
  }
  &__error {
    font-size: 0.8rem;
    margin-top: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.25s;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-100vh);
}
</style>
