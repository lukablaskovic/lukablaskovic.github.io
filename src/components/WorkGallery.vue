<template>
  <div
    class="container mt-32 md:mt-48 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="work" class="secondary-title">My work</h2>
      <p class="section-paragraph">
        I’ve had the pleasure of working on various projects, designing and
        implementing both frontend and backend solutions.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <a
          :href="item.webSRC"
          target="_blank"
          v-for="item in portfolio"
          :key="item.title">
          <div class="flex items-center justify-center bg-neutral-800">
            <div
              class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/50">
              <img
                :src="item.imgSRC"
                class="w-full md:block bg-nav h-48 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-125" />
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div
                class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center mb-8 px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  {{ item.title }}
                </h1>
                <p
                  class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {{ item.description }}
                </p>
                <button
                  class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>
<script>
import gameLauncherIMG from "../assets/work/launcher.png";
import skampIMG from "../assets/work/skamp.hr.png";
import istramusicshopIMG from "../assets/work/istramusicshop.png";
import macroquietcomIMG from "../assets/work/macroquiet.png";
import apartmentLukaIMG from "../assets/work/apartment-luka.png";
import studentClassificatorIMG from "../assets/work/student-classificator.png";
export default {
  name: "work-gallery",
  data() {
    return {
      portfolio: [
        {
          title: "MacroQuiet Game Launcher",
          imgSRC: gameLauncherIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-game-launcher",
          description:
            "Game launcher for MacroQuiet Games studio - written in JavaFX",
        },
        {
          title: "Skamp.hr Website",
          imgSRC: skampIMG,
          webSRC: "https://github.com/lukablaskovic/skamp.hr",
          description: "Website for Škamp Ltd created in Vue.js",
        },
        {
          title: "IstraMusicShop Mobile App",
          imgSRC: istramusicshopIMG,
          webSRC: "https://github.com/lukablaskovic/istra_music_shop",
          description:
            "Mobile application for the sale of musical instruments - written in Vue.js",
        },
        {
          title: "MacroQuiet.com Website",
          imgSRC: macroquietcomIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-frontend",
          description:
            "Front-end application for MacroQuiet Games studio - written in Vue.js",
        },
        {
          title: "Apartment Luka Website",
          imgSRC: apartmentLukaIMG,
          webSRC: "https://github.com/lukablaskovic/apartment-app",
          description: "Web application for home apartment - written in Vue.js",
        },
        {
          title: "Student Classificator App",
          imgSRC: studentClassificatorIMG,
          webSRC:
            "https://github.com/lukablaskovic/student-enquiries-classification",
          description:
            "NLP application for classifying student enquiries - written in Python + Hugging face",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
