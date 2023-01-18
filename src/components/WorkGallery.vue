<template>
  <div
    class="container mt-32 md:mt-48 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="work" class="secondary-title">My work</h2>
      <p class="section-paragraph">
        I’ve had the pleasure of working on various projects, designing and
        implementing both frontend and backend.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <img
          src="../assets/work/eurolim.hr.png"
          class="w-full bg-nav h-36 lg:h-72 object-cover" />
        <img
          src="../assets/work/skamp.hr.png"
          class="w-full bg-nav h-36 lg:h-72 object-cover" />
        <img
          src="../assets/work/istramusicshop.png"
          class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
        <img
          src="../assets/work/macroquiet.png"
          class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
        <img
          src="../assets/work/apartment-luka.png"
          class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
        <img
          src="../assets/work/student-classificator.png"
          class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "work-gallery",
};
</script>
<style lang=""></style>
