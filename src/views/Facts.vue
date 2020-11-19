<template>
  <div class="facts">
    <FactsList />
  </div>
</template>

<script>
import FactsList from "@/components/FactsList.vue";

export default {
  name: "Facts",
  components: {
    FactsList
  }
};
</script>

<style scoped>
.facts {
  text-align: center;
  margin: auto;
}
</style>
