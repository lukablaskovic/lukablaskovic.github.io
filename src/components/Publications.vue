<template>
  <div
    class="container mt-24 lg:mt-48 flex justify-center items-center mx-auto px-8 md:px-14 lg:px-12 w-full">
    <section class="w-full">
      <h2 id="publications" class="secondary-title">Publications</h2>
      <p class="section-paragraph"></p>
      <div class="md:flex xl:space-x-4">
        <div
          class="flex justify-center max-w-full lg:max-w-sm"
          v-for="pub in publications"
          :key="pub.title">
          <div class="block rounded-lg shadow-lg bg-white text-center m-2">
            <a :href="pub.link" target="_blank">
              <div
                class="py-3 px-6 border-b text-gray-900 text-md xl:text-xl font-medium border-gray-300">
                {{ pub.title }}
              </div></a
            >
            <a
              :href="pub.link"
              target="_blank"
              class="inline-block align-middle items-center mt-4">
              <span
                class="px-4 py-2 rounded-full text-white bg-selected-text hover:bg-theme font-semibold text-sm w-max cursor-pointer transition duration-300 ease">
                <component :is="pub.icon" class="inline h-6 w-6 text-white" />
                {{ pub.journal }}
              </span>
            </a>
            <div class="p-4">
              <p class="text-gray-700 text-sm md:text-base text-justify mb-4">
                {{ pub.desc }}
              </p>
              <hr />
            </div>
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
      publications: [
        {
          title:
            "Evaluating a Conceptual Model for Measuring Gaming Experience: A Case Study of Stranded Away Platformer Game",
          desc: "This paper investigates the interplay of gaming experience dimensions in platform video games and their impact on players' behavioral intentions. An empirical study using a post-use questionnaire and the partial least squares structural equation modeling (PLS-SEM) method highlights the importance of evaluating different facets of the gaming experience, offering potential tools for game designers to improve overall game quality.",
          journal: "MDPI - Information",
          link: "https://www.mdpi.com/journal/information/special_issues/AI_GS_Education",
          icon: NewspaperIcon,
        },
        {
          title:
            "Stranded Away: Implementation and User Experience Evaluation of An Indie Platformer Game Developed Using Unity Engine",
          desc: "The purpose of this study is to examine the user experience of an indie platformer game, Stranded Away, which was developed using the Unity engine. The game incorporates traditional platformer elements, such as collectibles and obstacles. Participants were recruited to play the game and then complete a post-use questionnaire to assess the extent to which Stranded Away meets the requirements of relevant user experience dimensions.",
          journal: "MIPRO 2023",
          link: "http://www.mipro.hr/Default.aspx",
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
