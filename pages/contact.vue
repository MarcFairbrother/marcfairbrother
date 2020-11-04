<template>
  <main class="contact">
    <PageHeading :heading-text="heading" class="contact__header" />
    <form class="contact__form" @submit.prevent="submitForm">
      <div class="contact__field">
        <label for="name">{{ formTexts.name.label }}</label>
        <input v-model="form.name" type="text" id="name" />
        <p v-if="$v.form.name.$invalid">{{ formTexts.name.error }}</p>
      </div>
      <div class="contact__field">
        <label for="email">{{ formTexts.email.label }}</label>
        <input v-model="form.email" type="email" id="email" />
        <p v-if="$v.form.email.$invalid">{{ formTexts.email.error }}</p>
      </div>
      <div class="contact__field">
        <label for="subject">{{ formTexts.subject.label }}</label>
        <input v-model="form.subject" type="text" id="subject" />
        <p v-if="$v.form.subject.$invalid">{{ formTexts.subject.error }}</p>
      </div>
      <div class="contact__field">
        <label for="message">{{ formTexts.message.label }}</label>
        <textarea
          v-model="form.message"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="$v.form.message.$invalid">{{ formTexts.message.error }}</p>
      </div>
      <button type="submit">Send</button>
    </form>
  </main>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

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
        name: '',
        email: '',
        subject: '',
        message: ''
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
      if (!this.$v.form.$invalid) {
        console.log(this.form);
      } else {
        console.log('The form is invalid');
      }
    }
  }
};
</script>
