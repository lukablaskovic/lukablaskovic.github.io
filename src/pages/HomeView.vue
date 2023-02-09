<template>
  <div>
    <div
      class="container mt-8 md:mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <div class="flex flex-wrap md:flex-nowrap">
        <!--Dot nav-->
        <nav class="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
          <div
            class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
            <a
              href="#"
              :class="
                scrollPosition < 900
                  ? 'nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body'
                  : 'nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'
              ">
              <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
                >Home</span
              ></a
            >

            <a
              href="#work"
              :class="
                scrollPosition >= 900 && scrollPosition < 1800
                  ? 'nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body'
                  : 'nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'
              ">
              <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
                >Work</span
              ></a
            >

            <a
              href="#publications"
              :class="
                scrollPosition >= 1800 && scrollPosition < 2200
                  ? 'nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body'
                  : 'nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'
              ">
              <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
                >Publications</span
              ></a
            >

            <a
              href="#hire"
              :class="
                scrollPosition >= 2200
                  ? 'nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body'
                  : 'nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'
              ">
              <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
                >Hire</span
              ></a
            >
          </div>
          <!--/Dot nav-->
        </nav>
        <div
          class="flex flex-col lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my36">
          <h1
            class="font-bold text-selected-text text-xl md:text-xl lg:text-2xl text-center md:text-left">
            Full Stack Developer<br />
          </h1>
          <h2 class="text-4xl md:text-4xl lg:text-6xl text-center md:text-left">
            Luka<br />
            Blašković
          </h2>
          <h3 class="mt-4 text-center md:text-left">
            I am a Full stack developer and IT enthusiast based in Croatia.
          </h3>
          <h3 class="text-center md:text-left">
            Currently, I am studying towards a master's degree in Informatics,
            at Juraj Dobrila University of Pula - Croatia.
          </h3>
          <h3 class="text-center md:text-left">
            I am passionate about building excellent software that improves the
            lives of those around me.
          </h3>
          <a href="#work" class="text-center md:text-left"
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
    <Publications></Publications>
    <HireMe></HireMe>
  </div>
</template>
<script>
import WorkGallery from "../components/WorkGallery.vue";
import HireMe from "../components/HireMe.vue";
import Publications from "../components/Publications.vue";
export default {
  name: "home-view",
  components: {
    WorkGallery,
    Publications,
    HireMe,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
<style lang=""></style>
