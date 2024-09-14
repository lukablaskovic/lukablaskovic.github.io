<template>
  <div
    class="px-6 md:container mt-32 md:mt-24 flex justify-between items-center mx-auto md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="work" class="secondary-title">My work</h2>
      <p class="section-paragraph">
        I've had the pleasure of working on various projects, designing and
        implementing both frontend and backend solutions.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div
          v-for="item in portfolio"
          :key="item.title"
          class="flex items-center justify-center bg-neutral-800"
          data-aos="zoom-in-up"
          data-aos-delay="300">
          <div
            class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/50">
            <img
              :src="item.imgSRC"
              class="w-full md:block bg-nav h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-125 rounded-md" />
            <div
              class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div
              class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center md:mb-8 px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1
                class="font-dmserif text-sm md:text-3xl font-bold text-white md:mt-12">
                {{ item.title }}
              </h1>
              <p
                class="mb-3 text-sm lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {{ item.description }}
              </p>
              <a :href="item.webSRC" target="_blank">
                <button
                  v-if="item.webSRC != ''"
                  class="rounded-full bg-neutral-900 hover:bg-selected-text py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Source code
                </button>
              </a>
              <a :href="item.buildSRC" target="_blank">
                <button
                  v-if="item.buildSRC != ''"
                  class="rounded-full bg-theme hover:bg-selected-text mt-2 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Live build
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import gameLauncherIMG from "../assets/work/launcher.png";
import istramusicshopIMG from "../assets/work/istramusicshop.png";
import macroquiet_frontendIMG from "../assets/work/macroquiet_frontend.png";
import macroquietLogoIMG from "../assets/work/macroquiet_logo.png";
import apartmentLukaIMG from "../assets/work/apartment-luka.png";
import studentClassificatorIMG from "../assets/work/student-classificator.png";
import eurolimIMG from "../assets/work/eurolim.png";
import milvusIMG from "../assets/work/milvus.png";
import rasaIMG from "../assets/work/rasa.png";
import hotelIMG from "../assets/work/hotel.png";
import covidIMG from "../assets/work/covid.jpg";
import fastAPIIMG from "../assets/work/fastapi.png";
import bookstackerIMG from "../assets/work/bookstacker.png";
import naiveBayesIMG from "../assets/work/naive-bayes.jpg";
import solidityIMG from "../assets/work/solidity.jpg";
import fipu_internshipIMG from "../assets/work/fipu-internship.png";
import music_cnn_IMG from "../assets/work/audio.jpg";
import educoder_IMG from "../assets/work/educoder.jpg";
import CASE_IMG from "../assets/work/coding.webp";
import Edubot_IMG from "../assets/work/edubot.png";
import FIPULAB_IMG from "../assets/work/FIPU_LAB_WEB.png";
export default {
  name: "work-gallery",
  data() {
    return {
      portfolio: [
        {
          title: "FIPU Lab Website",
          imgSRC: FIPULAB_IMG,
          webSRC: "https://github.com/lukablaskovic/edu_bot",
          description:
            "FIPU Lab is a research and development center for AI and ML projects at the Faculty of Informatics in Pula, Croatia.",
          buildSRC: "https://goreski.github.io/FIPULabWeb/",
        },
        {
          title: "EduBot",
          imgSRC: Edubot_IMG,
          webSRC: "https://github.com/lukablaskovic/edu_bot",
          description:
            "EduBot is a powerful RAG (Retrieval-Augmented Generation) chatbot that utilizes the latest SOTA models to provide a seamless and interactive learning experience.\n| Master's thesis project",
          buildSRC: "",
        },
        {
          title: "CASE",
          imgSRC: CASE_IMG,
          webSRC: "https://github.com/lukablaskovic/CASE",
          description:
            "Coding Assessment & Scoring Engine - Typer app for evaluating student student coding exams using GPT4",
          buildSRC: "",
        },
        {
          title: "Edu Coder",
          imgSRC: educoder_IMG,
          webSRC: "",
          description:
            "Web app designed to facilitate the evaluation of student coding skills through exams 🧑🏻‍🎓",

          buildSRC: "https://fipu-educoder.netlify.app/",
        },
        {
          title: "UNIPU Certify",
          imgSRC: solidityIMG,
          webSRC: "https://github.com/lukablaskovic/unipu-certify",
          description:
            "Mint Your Academic Certificates as NFTs 🎓🔗 -> NFT | Solidity | Vue.js",

          buildSRC: "",
        },
        {
          title: "Music Genre Classification using CNN",
          imgSRC: music_cnn_IMG,
          webSRC: "https://github.com/lukablaskovic/music-classification-cnn",
          description:
            "A deep learning project leveraging Convolutional Neural Networks to classify audio clips into musical genres -> Tensorflow | Keras | CNN",

          buildSRC: "",
        },
        {
          title: "FIPU Internship System",
          imgSRC: fipu_internshipIMG,
          webSRC: "https://github.com/stars/lukablaskovic/lists/fipu-praksa",
          description:
            "Complete system for handling faculty internships, for students, companies and professors -> Python | Baserow.io | FastAPI | PostrgreSQL | Vue.js",

          buildSRC: "https://fipu-praksa.unipu.hr/",
        },
        {
          title: "AquaPod FastAPI Backend",
          imgSRC: fastAPIIMG,
          webSRC: "https://github.com/lukablaskovic/aquapod-fastapi",
          description:
            "AquaPod is an innovative project designed to address marine pollution by autonomously collecting waste from the sea -> FastAPI | PostgreSQL | MQTT",

          buildSRC: "",
        },
        {
          title: "MacroQuiet.com Web",
          imgSRC: macroquiet_frontendIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-frontend",
          description:
            "Front-end application for MacroQuiet Games Studio - VUE3, TailwindCSS, Vite.js",

          buildSRC: "https://macroquiet.com/",
        },
        {
          title: "MacroQuiet Express.js Server",
          imgSRC: macroquietLogoIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-express-server",
          description:
            "Web server developed for communication between MacroQuiet videogames, web frontend and offline launcher -> Express.js | C# | Java",

          buildSRC: "https://macroquiet.herokuapp.com/",
        },
        {
          title: "Bookstacker - Android App",
          imgSRC: bookstackerIMG,
          webSRC: "https://github.com/lukablaskovic/bookstacker",
          description:
            "Bookstacker is an Android application that enables users to store their favourite books in a personal, easy-to-manage digital library. Android | Kotlin",

          buildSRC: "",
        },
        {
          title: "Student Office Chatbot",
          imgSRC: rasaIMG,
          webSRC: "https://github.com/lukablaskovic/student-office-chatbot",
          description:
            "Student office chatbot in Croatian language. Developed using Rasa",

          buildSRC: "",
        },
        {
          title: "Student Classificator App",
          imgSRC: studentClassificatorIMG,
          webSRC:
            "https://github.com/lukablaskovic/student-enquiries-classification",
          description:
            "NLP application for classifying student enquiries -> Python | Hugging face",

          buildSRC: "",
        },
        {
          title: "MacroQuiet Game Launcher",
          imgSRC: gameLauncherIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-game-launcher",
          description:
            "Game launcher for MacroQuiet Games studio - developed using JavaFX framework",

          buildSRC:
            "https://github.com/lukablaskovic/macroquiet-game-launcher/releases/tag/v0.1.0-alpha",
        },
        {
          title: "Naive Bayes Spam Filter",
          imgSRC: naiveBayesIMG,
          webSRC: "https://github.com/lukablaskovic/naive-bayes-spam_filter",
          description:
            "A naive Bayes spam filter developed in R - Project for Applied Statistics Course",

          buildSRC: "",
        },
        {
          title: "Apartment Luka Web App",
          imgSRC: apartmentLukaIMG,
          webSRC: "https://github.com/lukablaskovic/apartment-app",
          description:
            "Web application for home apartment - developed using Vite and Vue.js",

          buildSRC: "https://apartment-luka.netlify.app/",
        },
        {
          title: "Image similarity search App",
          imgSRC: milvusIMG,
          webSRC: "https://github.com/lukablaskovic/reverse-image-search",
          description:
            "Image similarity search App developed using Milvus.io and Towhee.io. Undergraduate thesis",

          buildSRC: "",
        },

        {
          title: "IstraMusicShop Mobile App",
          imgSRC: istramusicshopIMG,
          webSRC: "https://github.com/lukablaskovic/istra_music_shop",
          description:
            "Mobile application for the sale of musical instruments - developed using Vue.js",

          buildSRC: "https://istramusicshop.netlify.app/",
        },

        {
          title: "Eurolim.hr Website",
          imgSRC: eurolimIMG,
          webSRC: "",
          description: "Website for Eurolim Ltd shop - Wordpress",
          buildAvailable: true,
          buildSRC: "https://eurolim.hr/wp/",
        },

        {
          title: "Hotel Management App and Database",
          imgSRC: hotelIMG,
          webSRC: "https://github.com/lukablaskovic/hotel-db",
          description:
            "Hotel Management Application and Database -> mySQL | PHP | HTML | CSS | JS",

          buildSRC: "",
        },
        /*
        {
          title: "COVID-19 patients Flask App",
          imgSRC: covidIMG,
          webSRC: "https://github.com/lukablaskovic/covid19-flask",
          description:
            "Simple Python Flask App which connects to mySQL database for insertion and removal of patients",

          buildSRC: "",
        },
        */
      ],
    };
  },
};
</script>
<style lang=""></style>
