<template>
  <div class="home">
    <CatFact />
  </div>
</template>

<script>
import CatFact from "@/components/CatFact.vue";

export default {
  name: "Home",
  components: {
    CatFact
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin: auto;
}
</style>
