<template>
  <div
    class="container mt-24 lg:mt-48 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="hire" class="secondary-title">Hire me</h2>
      <p class="section-paragraph">
        Feel free to to contact me any time, through any method below.
      </p>

      <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-12 md:mt-24">
        <div class="space-y-12">
          <div>
            <label class="text-white block mb-6 text-xl font-bold">Name</label>
            <input
              v-model="emailForm.from_name"
              class="w-full border border-input-border bg-input px-4 py-4" />
          </div>
          <div>
            <label class="text-white block mb-6 text-xl font-bold">Email</label>
            <input
              v-model="emailForm.from_email"
              type="email"
              class="w-full border border-input-border bg-input px-4 py-4" />
          </div>
          <div>
            <label class="text-white block mb-6 text-xl font-bold"
              >Message</label
            >
            <textarea
              type="text"
              v-model="emailForm.message"
              class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
          </div>
          <button
            @click.prevent="sendEmail"
            class="px-6 py-2 bg-theme transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-selected-text duration-300">
            Send it!
          </button>
          <component :is="alert"></component>
        </div>

        <div class="mt-12">
          <!-- Contact info -->

          <a
            href="mailto:lukablaskovic2000@gmail.com"
            class="text-secondary underline mt-3 block"
            >lukablaskovic2000@gmail.com</a
          >

          <!-- Socials -->
          <div class="flex mt-12 space-x-6">
            <!-- Github -->

            <a href="https://github.com/lukablaskovic" target="_blank">
              <i
                class="fa-brands fa-github fa-3x transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300"></i>
            </a>
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/luka-bla%C5%A1kovi%C4%87-575087231/"
              target="_blank">
              <i
                class="fa-brands fa-linkedin fa-3x transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300"></i>
            </a>
            <!--Discord-->
            <a
              href="https://discordapp.com/users/355000513034715146"
              target="_blank">
              <i
                class="fa-brands fa-discord fa-3x transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";
import successAlert from "../components/alerts/success-alert.vue";
import warningAlert from "../components/alerts/warning-alert.vue";
import dangerAlert from "../components/alerts/danger-alert.vue";

import { shallowRef } from "vue";

export default {
  name: "hire-me",
  data() {
    return {
      emailForm: { from_name: "", from_email: "", message: "" },
      alert: null,
      alertShow: false,
    };
  },
  components: { successAlert, warningAlert, dangerAlert },
  methods: {
    async sendEmail() {
      try {
        if (
          this.emailForm.from_email == "" ||
          this.emailForm.from_name == "" ||
          this.emailForm.message == ""
        ) {
          this.alertShow = true;
          this.alert = shallowRef(warningAlert);
          this.alertTimeout(3000);
          return;
        }
        await emailjs.send(
          "service_zbc9jzl",
          "template_ibdvrhp",
          this.emailForm
        );
        this.alertShow = true;
        this.alert = shallowRef(successAlert);
      } catch (e) {
        console.log("FAILED...", e);
        this.alertShow = true;
        this.alert = shallowRef(dangerAlert);
      }
      this.alertTimeout(3000);
      setTimeout(() => {
        location.reload();
      }, 3000);
    },
    alertTimeout(ms) {
      setTimeout(() => {
        this.alertShow = false;
        this.alert = null;
      }, ms);
    },
  },
};
</script>
<style></style>
