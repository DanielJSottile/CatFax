import Vue from "vue";
import Vuex from "vuex";
import facts from "./modules/facts";
import images from "./modules/images";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { facts, images }
});
