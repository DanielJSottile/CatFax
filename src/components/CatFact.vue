<template>
  <div class="home">
    <h1>CatFax<i class="fas fa-paw"></i></h1>
    <button @click="getEverything()">
      Get A Random Cat Fact! <i class="fas fa-hat-wizard"></i>
    </button>
    <h3 class="cat-fact">{{ fact.text }}</h3>
    <img class="image" v-bind:src="image[0].url" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    fact: state => state.facts.fact,
    image: state => state.images.imageUrl
  }),
  methods: {
    ...mapActions("facts", ["getFact", "getFacts"]),
    ...mapActions("images", ["getRandomCat"]),
    getEverything() {
      this.$store.dispatch("facts/getFact");
      this.$store.dispatch("images/getRandomCat");
    }
  },
  mounted() {
    this.$store.dispatch("facts/getFact");
    this.$store.dispatch("images/getRandomCat");
  }
};
</script>

<style scoped>
.text {
  text-align: center;
  word-spacing: 2px;
  letter-spacing: 1px;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 50%;
}

.cat-fact {
  width: 85%;
  padding-top: 25px;
  padding-bottom: 25px;
  margin: auto;
}

.cat-fact::before {
  content: open-quote;
}

.cat-fact::after {
  content: close-quote;
}

.image {
  border: 10px double #999999;
  border-radius: 100px;
  height: 400px;
}

button {
  margin: 5px;
  padding: 5px;
  font-size: 18px;
  color: #444444;
  text-decoration: none;
  border: 3px solid #999999;
  border-radius: 14px;
}

button:hover {
  color: #eeeeee;
  background-color: #444444;
  transition: 0.8s;
}
</style>
