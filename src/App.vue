<script setup lang="ts"></script>

<template>
  <body class="font-poppins pb-12 text-white scroll-smooth">
    <header class="py-6">
      <div
        class="container flex justify-between items-center mx-auto md:px-14 lg:px-24 w-full">
        <a href="https://lukablaskovic.github.io/"
          ><div class="text-xl font-bold">lukablaskovic</div></a
        >
        <div class="hidden md:flex space-x-12 items-center">
          <a href="#" class="text-selected-text">Home</a>
          <a href="#work">My work</a>
          <a href="#publications">Publications</a>
          <a
            href="https://drive.google.com/drive/folders/1uXpdj8ByXizMro42HuNAvkrWX4hiuyUi?usp=sharing"
            target="_blank"
            >CV</a
          >
          <a href="#hire"
            ><button
              class="px-6 py-2 bg-theme transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-selected-text duration-300">
              Hire me
            </button></a
          >
        </div>

        <div class="flex md:hidden justify-center">
          <div class="dropdown relative">
            <button
              @click.stop.prevent="toggleDropdown"
              class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none transition duration-150 ease-in-out"
              type="button">
              <i class="fa-solid fa-bars fa-xl"></i>
            </button>
            <ul
              v-if="isDropdownOpen"
              class="dropdown-menu min-w-max absolute text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg bg-gray-800">
              <a href="#">
                <span
                  class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-selected-text"
                  >Home</span
                >
              </a>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                  href="#work"
                  >My work</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                  href="#publications"
                  >Publications</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                  href="https://drive.google.com/drive/folders/1uXpdj8ByXizMro42HuNAvkrWX4hiuyUi?usp=sharing"
                  target="_blank"
                  >CV</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                  href="#hire"
                  >Hire me</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>
    <div
      ref="scrollTopButton"
      class="invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 lg:pr-8 transition">
      <div class="text-gray-400 hover:text-selected-text transition">
        <button @click="scrollToTop">
          <i class="fa-sharp fa-solid fa-circle-arrow-up fa-2x"></i>
        </button>
      </div>
    </div>
  </body>
  <footer class="bg-theme font-poppins text-center lg:text-left mt-12">
    <div
      class="text-white text-center p-4"
      style="background-color: rgba(0, 0, 0, 0.2)">
      ©{{ currentYear }}
      Luka Blašković
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isDropdownOpen: false as boolean,
      currentYear: new Date().getFullYear() as number,
      scrollTopButton: null as HTMLElement | null, // use HTMLElement | null for better type inference
    };
  },
  methods: {
    toggleDropdown(): void {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown(): void {
      this.isDropdownOpen = false;
    },
    handleClickOutside(event: MouseEvent): void {
      if (!this.$el.contains(event.target as Node)) {
        this.closeDropdown();
      }
    },
    scrollToTop(): void {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll(): void {
      if (this.scrollTopButton) {
        if (window.scrollY > 0) {
          this.scrollTopButton.classList.remove("invisible");
        } else {
          this.scrollTopButton.classList.add("invisible");
        }
      }
    },
  },
  mounted(): void {
    this.scrollTopButton = this.$refs.scrollTopButton as HTMLElement;
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleClickOutside);
  },
  unmounted(): void {
    document.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickOutside);
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
