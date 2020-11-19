import { getRandomCatImage } from "../../services/catImagesService";

const state = () => ({
  imageUrl: [
    { url: "https://media2.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" } // DEFAULT IMAGE
  ]
});

// getters
const getters = {};

// actions
const actions = {
  getRandomCat({ commit }) {
    getRandomCatImage().then(data => {
      commit("setCat", data);
    });
  }
};

//mutations

const mutations = {
  setCat(state, cat) {
    state.imageUrl = cat;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
