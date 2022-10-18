import Vue from "vue";
import Vuex from "vuex";
import produits from "../store/modules/produits";
import auth from "../store/modules/auth.module";
import client from "../store/modules/client";
import upload from "../store/modules/upload.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    produits,
    // auth,
    client,
    upload,
  },
});
