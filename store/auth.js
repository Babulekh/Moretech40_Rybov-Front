//import createPersistedState from "vuex-persistedstate";

export const state = () => ({
  username: "",
});

export const getters = {
  getUsername(state) {
    return state.username;
  },
};

export const mutations = {
  login(state, username) {
    document.cookie =
      encodeURIComponent("username") + "=" + encodeURIComponent(username);
    state.username = username;
  },
  logout(state) {
    state.username = "";
  },
};

export const actions = {};

//export const plugins = [createPersistedState()];
