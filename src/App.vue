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
          <a href="#hire"
            ><button
              class="px-6 py-2 bg-theme transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-selected-text duration-300">
              Hire me
            </button></a
          >
        </div>

        <div class="flex md:hidden justify-center">
          <div>
            <div class="dropdown relative">
              <button
                class="dropdown-toggle inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg active:text-white transition duration-150 ease-in-out items-center whitespace-nowrap"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fa-solid fa-bars fa-xl"></i>
              </button>
              <ul
                class="dropdown-menu min-w-max absolute text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none bg-gray-800"
                aria-labelledby="dropdownMenuButton2">
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
                    href="#hire"
                    >Hire me</a
                  >
                </li>
              </ul>
            </div>
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
export default {
  data() {
    return {
      currentYear: 2023,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton as HTMLElement;

      if (window.scrollY > 0) {
        scrollBtn.classList.remove("invisible");
      } else {
        scrollBtn.classList.add("invisible");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
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
