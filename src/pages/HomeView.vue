<template>
  <div>
    <div
      class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <div class="flex flex-wrap md:flex-nowrap">
        <!--Dot nav-->
        <nav class="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
          <div
            class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
            <a
              href="#"
              class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
              <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
                >Home</span
              ></a
            >

            <a
              href="#"
              class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
              <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
                >Work</span
              ></a
            >

            <a
              href="#"
              class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
              <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
                >Hire</span
              ></a
            >
          </div>
          <!--/Dot nav-->
        </nav>
        <div
          class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my36">
          <h1
            class="font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
            Building<br />beautiful web experiences
          </h1>
          <a href="#hire-me"
            ><button class="px-6 mt-12 py-2 bg-theme">My work</button></a
          >
        </div>
        <img
          class="rounded-full mx-auto mt-6 w-4/5 md:w-2/4 md:mt-0 -z-1"
          src="../assets/lukablaskovic-profile.jpg"
          alt="Luka Blašković profile image" />
      </div>
    </div>

    <WorkGallery></WorkGallery>

    <HireMe></HireMe>
  </div>
</template>
<script>
import WorkGallery from "../components/WorkGallery.vue";
import HireMe from "../components/HireMe.vue";
export default {
  name: "home-view",
  components: {
    WorkGallery,
    HireMe,
  },
};
</script>
<style lang=""></style>
