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
          <img
            :src="item.imgSRC"
            class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
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
        },
        {
          title: "Skamp.hr Website",
          imgSRC: skampIMG,
          webSRC: "https://github.com/lukablaskovic/skamp.hr",
        },
        {
          title: "IstraMusicShop Mobile App",
          imgSRC: istramusicshopIMG,
          webSRC: "https://github.com/lukablaskovic/istra_music_shop",
        },
        {
          title: "MacroQuiet.com Website",
          imgSRC: macroquietcomIMG,
          webSRC: "https://github.com/lukablaskovic/macroquiet-frontend",
        },
        {
          title: "Apartment Luka Website",
          imgSRC: apartmentLukaIMG,
          webSRC: "https://github.com/lukablaskovic/apartment-app",
        },
        {
          title: "Student Classificator App",
          imgSRC: studentClassificatorIMG,
          webSRC:
            "https://github.com/lukablaskovic/student-enquiries-classification",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
