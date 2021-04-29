<template>
  <div>
    <section class="titulo">
      <img src="../../public/iconSite.png" alt="" />
    </section>
    <section class="main">
      <div class="areaTodoAdd">
        <form>
          <label for="nome">* Nome da Tarefa</label>
          <div class="areaNome">
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Ex.: Fazer slide."
              autocomplete="off"
              v-model="inputName"
            />
            <button @click.prevent="addingTodo">+</button>
          </div>

          <label for="descricao">Descrição da tarefa:</label>
          <textarea
            name="descricao"
            id="descricao"
            cols="30"
            rows="5"
            placeholder="Ex.: Preciso fazer o slide para a matéria de história."
            v-model="inputDescription"
          ></textarea>
        </form>
        <p>* Obrigatório</p>
      </div>
      <div class="areaToDo">
        <transition-group name="todo" tag="ul" mode="out-in">
          <li v-for="(todo, index) in getTodos" :key="todo.name">
            <Todo
              :todo="todo"
              :indextodo="index"
              :completedToDo="todo.completedToDo"
            />
          </li>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import Todo from "@/components/Todo.vue";

export default {
  name: "Home",
  data() {
    return {
      inputName: "",
      inputDescription: "",
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
  methods: {
    ...mapActions(["addTodo", "removeTodo", "addLocalStorage"]),
    addingTodo() {
      if (this.inputName != "") {
        let contains = false;
        if (this.getTodos.length != 0) {
          for (let i = 0; i < this.getTodos.length; i++) {
            if (this.getTodos[i].name === this.inputName) {
              contains = true;
            }
          }
        }
        if (!contains) {
          const todo = {
            name: this.inputName,
            description: this.inputDescription,
            completedToDo: false,
          };
          this.addTodo(todo);
          this.inputName = "";
          this.inputDescription = "";
          this.addLocalStorage();
        }
      }
    },
    removingTodo(index) {
      this.removeTodo(index);
    },
  },
  components: {
    Todo,
  },
};
</script>

<style scoped>
.todo-enter,
.todo-leave-to {
  opacity: 0;
  transform: translate3d(-50px, 0, 0);
}
.todo-enter-active,
.todo-leave-active {
  transition: all 0.5s;
}

.titulo {
  background: #0000ff;
  height: 120px;
  border-radius: 10px 10px 4px 4px;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.titulo img {
  margin-top: 15px;
  width: 30px;
}
.main {
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.areaTodoAdd {
  width: 95%;
  background: #fff;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  position: relative;
  top: -60px;
  border-radius: 10px;
  padding: 20px;
}
.areaTodoAdd p {
  margin: 0;
  font-weight: bold;
}
form {
  display: flex;
  flex-direction: column;
}
form label {
  font-size: 20px;
  padding-bottom: 10px;
}
.areaNome {
  display: flex;
  margin-bottom: 20px;
}
form #nome {
  border: 0 none;
  outline: 0 none;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 17px;
  flex: 1;
}
.areaNome button {
  outline: 0 none;
  border: 0 none;
  background: #0000ff;
  color: #fff;
  font-size: 30px;
  width: 40px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
}
form #nome:focus,
form #descricao:focus {
  border: 0 none;
  border-bottom: 2px solid #0000ff;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
}
form #descricao {
  margin-bottom: 20px;
  border: 0 none;
  outline: 0 none;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 17px;
  resize: none;
}
form #descricao:hover,
form #nome:hover {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
}
.areaToDo {
  width: 95%;
}
.areaToDo ul,
.areaToDo li {
  list-style: none;
}
.areaToDo ul {
  padding: 0;
}

@media (max-width: 415px) {
  .areaNome {
    flex-direction: column;
  }
  .areaNome #nome {
    border-radius: 5px 5px 0px 0px;
  }
  .areaNome button {
    margin: 0;
    border-radius: 0px 0px 5px 5px;
    width: 100%;
  }
}
</style>
