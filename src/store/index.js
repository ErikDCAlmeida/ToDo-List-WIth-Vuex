import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toDos:
      localStorage.getItem("todos") === null
        ? []
        : JSON.parse(localStorage.getItem("todos")),
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.toDos.unshift(payload);
    },
    REMOVE_TODO(state, payload) {
      state.toDos.splice(payload, 1);
    },
    ATT_TODOS(state, payload) {
      var atualizada = state.toDos.splice(payload, 1);
      atualizada = atualizada[0];
      atualizada.completedToDo = true;
      state.toDos.push(atualizada);
    },
    ADD_LOCALSTORAGE(state) {
      localStorage.setItem("todos", JSON.stringify(state.toDos));
    },
  },
  actions: {
    addTodo(context, payload) {
      context.commit("ADD_TODO", payload);
    },
    removeTodo(context, payload) {
      context.commit("REMOVE_TODO", payload);
      context.commit("ADD_LOCALSTORAGE");
    },
    attTodos(context, payload) {
      context.commit("ATT_TODOS", payload);
    },
    addLocalStorage(context) {
      context.commit("ADD_LOCALSTORAGE");
    },
  },
  getters: {
    getTodos(state) {
      return state.toDos;
    },
  },
  modules: {},
});
