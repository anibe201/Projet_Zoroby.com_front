import Vue from "vue";
import Vuex from "vuex";
import produits from "../store/modules/produits";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    produits,
  },
});
