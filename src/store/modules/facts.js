import { getAllFacts, getRandomFact } from "../../services/factService";

const state = () => ({
  facts: [],
  fact: {}
});

// getters
const getters = {};

// actions
const actions = {
  getFacts({ commit }) {
    getAllFacts().then(data => {
      commit("setAllFacts", data.all);
    });
  },

  getFact({ commit }) {
    getRandomFact().then(data => {
      commit("setFact", data);
    });
  }
};

//mutations

const mutations = {
  setAllFacts(state, facts) {
    state.facts = facts;
  },

  setFact(state, fact) {
    state.fact = fact;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
