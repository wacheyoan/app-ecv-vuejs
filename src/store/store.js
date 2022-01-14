import Vue from "vue";
import Vuex from "vuex";
import RepositoryFactory from "@/repository/RepositoryFactory";

const UserRepository = RepositoryFactory.get("users");
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },

  actions: {
    async getUsers({ commit }) {
      commit("loadUsers", await UserRepository.get());
    }
  },

  mutations: {
    loadUsers: (state, res) => {
      const { data } = res;
      state.users = data;
    }
  }
});
export default store;
