<template>
  <div
    class="container mt-48 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="hire" class="secondary-title">Hire me</h2>
      <p class="section-paragraph">
        Feel free to to contact me any time, through any method below.
      </p>

      <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
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
              <i class="fa-brands fa-github fa-3x"></i>
            </a>
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/luka-bla%C5%A1kovi%C4%87-575087231/"
              target="_blank">
              <i class="fa-brands fa-linkedin fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";

export default {
  name: "hire-me",
  data() {
    return {
      emailForm: { from_name: "", from_email: "", message: "" },
    };
  },
  methods: {
    async sendEmail() {
      try {
        await emailjs.send(
          "service_zbc9jzl",
          "template_ibdvrhp",
          this.emailForm
        );
        console.log("SUCCESS!");
      } catch (e) {
        console.log("FAILED...", e);
      }
    },
  },
};
</script>
<style></style>
