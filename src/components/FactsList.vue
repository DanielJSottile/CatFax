<template>
  <div class="facts-list">
    <h1>All CatFax<i class="fas fa-paw"></i></h1>
    <ul id="cat-facts">
      <li v-for="fact in facts" :key="fact.text">
        <i class="fas fa-paw"></i> {{ fact.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    facts: state => state.facts.facts
  }),
  methods: {
    ...mapActions("facts", ["getFacts"]),
    getFacts() {
      this.$store.dispatch("facts/getFacts");
    }
  },
  mounted() {
    this.$store.dispatch("facts/getFacts");
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 15px;
  column-count: 3;
}

li {
  padding: 5px;
  margin: 5px;
}
</style>
