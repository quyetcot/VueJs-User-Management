import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    userList: [],
    selectUser: null
  },
  getters: {
    allUser(state) {
      return state.userList;
    },
    userById : (state)=> state.selectUser
  },
  mutations: {
    GET_USER(state, payload) {
      state.userList = payload;
    },
    ADD_USER(state, dataUser) {
      state.userList.push(dataUser);
    },
    DELETE_USER(state, userId) {
      state.userList = state.userList.filter((user) => user.id !== userId);
    },
    GET_USER_BY_ID(state, payload){
      state.selectUser = payload;
    },
    UPDATE_USER(state, payload){
      state.user = payload;
    }
  },
  actions: {
    async getUser({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        commit("GET_USER", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async addUser({ commit }, dataUser) {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        dataUser
      );
      console.log(response.data);
      commit("ADD_USER", response.data);
    },
    async deleteUser({ commit }, userId) {
      const response = await axios.delete(
        `http://localhost:3000/api/users/${userId}`
      );
      console.log(response.data);
      commit("DELETE_USER", userId);
    },

    async getUserById({commit}, userId){
      const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
      commit('GET_USER_BY_ID', response.data)
    },

    async updateUserById({commit},{userId,dataUpdate}){
      console.log(dataUpdate);
      const response = await axios.put(`http://localhost:3000/api/users/${userId}`,dataUpdate );
      console.log(response.data);
      commit('UPDATE_USER',response.data);
    }
  },
});
export default store;
