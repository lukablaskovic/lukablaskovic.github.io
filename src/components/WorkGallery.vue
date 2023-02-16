<template>
  <div
    class="container mt-32 md:mt-48 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="work" class="secondary-title">My work</h2>
      <p class="section-paragraph">
        I've had the pleasure of working on various projects, designing and
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
                class="w-full md:block bg-nav h-56 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-125" />
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div
                class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center md:mb-8 px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1
                  class="font-dmserif text-md md:text-3xl font-bold text-white mt-12">
                  {{ item.title }}
                </h1>
                <p
                  class="mb-3 text-sm lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {{ item.description }}
                </p>
                <button
                  class="rounded-full bg-neutral-900 hover:bg-selected-text py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Source code
                </button>
                <a :href="item.buildLink" target="_blank">
                  <button
                    v-if="item.buildAvailable"
                    class="rounded-full bg-theme hover:bg-selected-text mt-2 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    Live build
                  </button>
                </a>
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
import macroquietLogoIMG from "../assets/work/macroquiet_logo.png";
import apartmentLukaIMG from "../assets/work/apartment-luka.png";
import studentClassificatorIMG from "../assets/work/student-classificator.png";
import eurolimIMG from "../assets/work/eurolim.png";
import milvusIMG from "../assets/work/milvus.png";
import multimediaIMG from "../assets/work/multimedia.png";
import hotelIMG from "../assets/work/hotel.png";
import covidIMG from "../assets/work/covid.jpg";

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
            "Game launcher for MacroQuiet Games studio - developed using JavaFX framework",
          buildAvailable: true,
          buildLink:
            "https://github.com/lukablaskovic/macroquiet-game-launcher/releases/tag/v0.1.0-alpha",
        },
        {
          title: "Skamp.hr Website",
          imgSRC: skampIMG,
          webSRC: "https://github.com/lukablaskovic/skamp.hr",
          description: "Website for Škamp Ltd company- developed using Vue.js",
          buildAvailable: true,
          buildLink: "https://skamp.hr/",
        },
        {
          title: "IstraMusicShop Mobile App",
          imgSRC: istramusicshopIMG,
          webSRC: "https://github.com/lukablaskovic/istra_music_shop",
          description:
            "Mobile application for the sale of musical instruments - developed using Vue.js",
          buildAvailable: true,
          buildLink: "https://istramusicshop.netlify.app/",
        },
        {
          title: "MacroQuiet.com Website",
          imgSRC: macroquietcomIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-frontend",
          description:
            "Front-end application for MacroQuiet Games studio - developed using Vue.js",
          buildAvailable: true,
          buildLink: "https://macroquiet.com/",
        },
        {
          title: "Apartment Luka Website",
          imgSRC: apartmentLukaIMG,
          webSRC: "https://github.com/lukablaskovic/apartment-app",
          description:
            "Web application for home apartment - developed using Vite and Vue.js",
          buildAvailable: true,
          buildLink: "https://apartment-luka.netlify.app/",
        },
        {
          title: "Student Classificator App",
          imgSRC: studentClassificatorIMG,
          webSRC:
            "https://github.com/lukablaskovic/student-enquiries-classification",
          description:
            "NLP application for classifying student enquiries - developed using Python + Hugging face",
          buildAvailable: false,
          buildLink: "",
        },
        {
          title: "Eurolim.hr Website",
          imgSRC: eurolimIMG,
          webSRC: "https://eurolim.hr/wp/",
          description: "Website for Eurolim Ltd shop - built using Wordpress",
          buildAvailable: true,
          buildLink: "https://eurolim.hr/wp/",
        },
        {
          title: "MacroQuiet backend system",
          imgSRC: macroquietLogoIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-backend",
          description:
            "Backend system for connection between videogames, web frontend and offline launcher - developed in Express.js|C#|Java",
          buildAvailable: false,
          buildLink: "",
        },
        {
          title: "Image similarity search App",
          imgSRC: milvusIMG,
          webSRC: "https://github.com/lukablaskovic/reverse-image-search",
          description:
            "Image similarity search App developed using Milvus.io and Towhee.io. Undergraduate thesis",
          buildAvailable: false,
          buildLink: "",
        },
        {
          title: "Hotel Management App and Database",
          imgSRC: hotelIMG,
          webSRC: "https://github.com/lukablaskovic/hotel-db",
          description:
            "Hotel Management Application and Database - developed in PHP and mySQL respectively",
          buildAvailable: false,
          buildLink: "",
        },
        {
          title: "COVID-19 patients Flask App",
          imgSRC: covidIMG,
          webSRC: "https://github.com/lukablaskovic/covid19-flask",
          description:
            "Simple Python Flask App which connects to mySQL database for insertion and removal of patients",
          buildAvailable: false,
          buildLink: "",
        },
        {
          title: "Simple website for Multimedia course",
          imgSRC: multimediaIMG,
          webSRC: "https://github.com/lukablaskovic/multimedia-fipu",
          description:
            "Multimedia course website created using HTML|CSS|JS|Bootstrap",
          buildAvailable: true,
          buildLink: "https://lukablaskovic-fipu.netlify.app/index.html",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
