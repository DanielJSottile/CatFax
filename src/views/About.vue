<template>
  <div class="about">
    <AboutText />
  </div>
</template>

<script>
import AboutText from "@/components/AboutText.vue";

export default {
  name: "About",
  components: {
    AboutText
  }
};
</script>

<style scoped>
.about {
  text-align: center;
  margin: auto;
}
</style>
