<template>
  <div>
    <div
      class="px-6 md:container flex mt-2 md:mt-16 justify-between items-center mx-auto md:px-14 lg:px-24 w-full">
      <div class="flex flex-wrap md:flex-nowrap">
        <!--Dot nav-->
        <nav class="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
          <div
            class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
            <a
              href="#"
              :class="
                scrollPosition < 800
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
                scrollPosition >= 800 && scrollPosition < 2469
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
                scrollPosition >= 2469 && scrollPosition < 3280
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
                scrollPosition >= 3280
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
          class="flex flex-col 2xl:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my36">
          <h1
            class="font-bold text-selected-text text-xl mb-2 md:text-xl lg:text-2xl text-center md:text-left">
            Full Stack Developer<br />
          </h1>
          <h2 class="text-5xl md:text-4xl lg:text-6xl text-center md:text-left">
            Luka<br />
            Blašković
          </h2>
          <div class="image-container ml-4 mt-2 block md:hidden">
            <img
              class="rounded-full mx-auto w-3/4 md:w-1/2 -z-1 animate__animated animate__bounceIn"
              src="../assets/me_no_bg_colored.png"
              alt="Luka Blašković profile image" />
          </div>
          <h3 class="mb-4 mt-8 md:mt-4 text-center md:text-left">
            I am a Full Stack Developer and IT enthusiast based in Croatia,
            currently pursuing a Master's degree in Informatics at Juraj Dobrila
            University of Pula.
          </h3>

          <h3 class="text-center md:text-left">
            With a strong passion for creating exceptional software, I am
            committed to utilizing my expertise to positively impact the lives
            of those around me and contribute to the ever-evolving world of
            technology.
          </h3>
          <BR></BR>

          <a href="#work" class="text-center md:text-left"
            ><button
              class="px-16 md:px-6 mt-6 md:mt-12 py-4 md:py-2 text-xl md:text-base font-bold rounded-lg bg-theme transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-selected-text duration-300">
              My work
            </button></a
          >
        </div>
        <div class="image-container hidden md:block">
          <img
            class="rounded-full mx-auto md:w-3/4 2xl:w-3/4 md:ml-48 md:mt-0 -z-1 animate__animated animate__bounceIn"
            src="../assets/me_no_bg_colored.png"
            alt="Luka Blašković profile image" />
        </div>
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
  mounted() {
    AOS.init();
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

<style>
.image-container img {
  transition: filter 0.5s ease;
  /* Apply grayscale by default */
  filter: grayscale(100%);
}

.image-container img:hover {
  /* Remove filters on hover */
  filter: none;
}
</style>
