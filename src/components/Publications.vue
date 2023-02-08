<template>
  <div
    class="container mt-48 flex justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="publications" class="secondary-title">Publications</h2>
      <p class="section-paragraph"></p>
      <div class="hidden md:flex space-x-4">
        <div
          class="flex justify-center place-items-center"
          v-for="pub in publications"
          :key="pub.title">
          <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <a :href="pub.link" target="_blank">
              <div
                class="py-3 px-6 border-b text-gray-900 text-xl font-medium border-gray-300">
                {{ pub.title }}
              </div></a
            >
            <div class="p-4">
              <p class="text-gray-700 text-base mb-4">
                {{ pub.desc }}
              </p>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
              {{ pub.journal }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "publications",
  data() {
    return {
      publications: [
        {
          title:
            "Evaluating the Perceived Quality of Mobile Banking Applications in Croatia: An Empirical Study",
          desc: "This study examines mobile banking app quality in Croatia, focusing on customer satisfaction and usage intentions. Results show that quality attributes like feedback and responsiveness contribute to ease of use and efficiency. No significant differences found among the 4 mobile banking apps examined but significant differences among users of different age groups. Advantages include efficiency and usefulness, while a lack of personalization options is seen as a drawback.",
          journal: "MDPI - Future Internet",
          link: "https://www.mdpi.com/1999-5903/15/1/8",
        },
        {
          title:
            "Stranded Away: Implementation and User Experience Evaluation of An Indie Platformer Game Developed Using Unity Engine",
          desc: "The purpose of this study is to examine the user experience of an indie platformer game, Stranded Away, which was developed using the Unity engine. The game incorporates traditional platformer elements, such as collectibles and obstacles. Participants were recruited to play the game and then complete a post-use questionnaire to assess the extent to which Stranded Away meets the requirements of relevant user experience dimensions.",
          journal: "MIPRO 2023",
          link: "",
        },
      ],
    };
  },
};
</script>
<style></style>
