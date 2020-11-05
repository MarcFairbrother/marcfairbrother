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
        <label for="name">{{ formTexts.name.label }}</label>
        <input
          v-model="form.name"
          @blur="$v.form.name.$touch()"
          type="text"
          id="name"
        />
        <p v-if="$v.form.name.$error">
          {{ formTexts.name.error }}
        </p>
      </div>
      <div class="contact__field">
        <label for="email">{{ formTexts.email.label }}</label>
        <input
          v-model="form.email"
          @blur="$v.form.email.$touch()"
          type="email"
          id="email"
        />
        <p v-if="$v.form.email.$error">
          {{ formTexts.email.error }}
        </p>
      </div>
      <div class="contact__field">
        <label for="subject">{{ formTexts.subject.label }}</label>
        <input
          v-model="form.subject"
          @blur="$v.form.subject.$touch()"
          type="text"
          id="subject"
        />
        <p v-if="$v.form.subject.$error">
          {{ formTexts.subject.error }}
        </p>
      </div>
      <div class="contact__field">
        <label for="message">{{ formTexts.message.label }}</label>
        <textarea
          v-model="form.message"
          @blur="$v.form.message.$touch()"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="$v.form.message.$error">
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
        })
        .catch(() => {
          // display error modal
          this.displayModal(this.formTexts.error);
        });
    },
    displayModal(textContent) {
      console.log(textContent);
      // update modal text content
      // display modal
    }
  }
};
</script>
