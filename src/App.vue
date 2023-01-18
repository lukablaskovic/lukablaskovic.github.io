<script setup lang="ts"></script>

<template>
  <body class="font-poppins pb-12 text-white">
    <header class="py-6">
      <div
        class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="text-xl font-bold">lukablaskovic</div>
        <div class="hidden md:flex space-x-12 items-center">
          <a href="#" class="text-selected-text">Home</a>
          <a href="#work">My work</a>
          <a href="#hire-me"
            ><button class="px-6 py-2 bg-theme">Hire me</button></a
          >
        </div>
        <div class="md:hidden"><i class="fa-solid fa-bars"></i></div>
      </div>
    </header>
    <router-view></router-view>
  </body>
</template>

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
