<template>
  <div
    class="container mt-24 lg:mt-48 flex justify-center items-center mx-auto px-2 md:px-14 lg:px-12 w-full">
    <section>
      <h2 id="publications" class="secondary-title mb-6">Publications</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          class="card border-gray-300 shadow-lg rounded-lg bg-gray-100"
          v-for="pub in publications"
          :key="pub.title"
          data-aos="fade-right"
          data-aos-delay="400">
          <div class="card-body p-4 text-center md:text-left">
            <a
              :href="pub.link"
              target="_blank"
              class="block mb-2 text-md md:text-lg text-center md:text-left font-bold text-gray-900 hover:text-theme transition ease-in-out duration-150"
              >{{ pub.title }}</a
            >
            <a
              :href="pub.link"
              target="_blank"
              class="inline-flex text-sm md:text-base items-center mb-3 bg-selected-text hover:bg-theme text-white font-semibold py-2 px-3 rounded transition ease-in-out duration-150">
              <component
                :is="pub.icon"
                class="inline h-6 w-6 text-white mr-2" />
              <span>{{ pub.journal }}</span>
            </a>
            <p class="text-gray-700 text-sm text-justify">{{ pub.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { AcademicCapIcon, NewspaperIcon } from "@heroicons/vue/24/solid";

export default {
  name: "publications",
  components: {
    AcademicCapIcon,
    NewspaperIcon,
  },
  data() {
    return {
      isExtended: false,

      publications: [
        {
          title:
            "Evaluating a Conceptual Model for Measuring Gaming Experience: A Case Study of Stranded Away Platformer Game",
          desc: "This paper investigates the interplay of gaming experience dimensions in platform video games and their impact on players' behavioral intentions. An empirical study using a post-use questionnaire and the partial least squares structural equation modeling (PLS-SEM) method highlights the importance of evaluating different facets of the gaming experience, offering potential tools for game designers to improve overall game quality.",
          journal: "MDPI - Information",
          link: "https://doi.org/10.3390/info14060350",
          icon: NewspaperIcon,
        },
        {
          title:
            "Stranded Away: Implementation and User Experience Evaluation of An Indie Platformer Game Developed Using Unity Engine",
          desc: "The purpose of this study is to examine the user experience of an indie platformer game, Stranded Away, which was developed using the Unity engine. The game incorporates traditional platformer elements, such as collectibles and obstacles. Participants were recruited to play the game and then complete a post-use questionnaire to assess the extent to which Stranded Away meets the requirements of relevant user experience dimensions.",
          journal: "IEEE MIPRO23",
          link: "https://ieeexplore.ieee.org/document/10159769",
          icon: NewspaperIcon,
        },
        {
          title:
            "Evaluating the Perceived Quality of Mobile Banking Applications in Croatia: An Empirical Study",
          desc: "This study examines mobile banking app quality in Croatia, focusing on customer satisfaction and usage intentions. Results show that quality attributes like feedback and responsiveness contribute to ease of use and efficiency. No significant differences found among the 4 mobile banking apps examined but significant differences among users of different age groups. Advantages include efficiency and usefulness, while a lack of personalization options is seen as a drawback.",
          journal: "MDPI - Future Internet",
          link: "https://www.mdpi.com/1999-5903/15/1/8",
          icon: NewspaperIcon,
        },

        {
          title: "Vector databases for unstructured data processing",
          desc: "Undergraduate thesis that explores the concept of structured, unstructured, and semi-structured data and the use of vector databases in the processing and storage of unstructured data. The thesis focuses on the conversion of unstructured data, such as images, into numerical representations through deep learning models and the use of vector databases for simple search and retrieval of similar data. An image similarity search application was developed using Milvus.io vector database and Towhee.io Python module to demonstrate the working principles of vector databases.",
          journal: "Undergraduate thesis",
          link: "https://repozitorij.unipu.hr/islandora/object/unipu%3A7218",
          icon: AcademicCapIcon,
        },
      ],
    };
  },
};
</script>
<style></style>
