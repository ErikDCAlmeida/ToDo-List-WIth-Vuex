<template>
  <div class="mainTodo">
    <div class="barCompleted" :style="{ background: bgColor }"></div>
    <div class="todoInfos">
      <p>
        <span>{{ todo.name }}</span>
      </p>
      <p>
        <span>{{ todo.description }}</span>
      </p>
    </div>
    <div class="areaBtn">
      <button class="btnCompleted" v-if="!completed" @click="completedTodo">
        <img src="@/assets/completedIcon.png" alt="completedIcon" />
      </button>
      <button
        class="btnDelete"
        @click="removeTodo(indextodo)"
        :style="{ borderRadius: borderRedButton }"
      >
        <img src="@/assets/deleteIcon.png" alt="deleteIcon" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Todo",
  props: ["todo", "indextodo", "completedToDo"],
  data() {
    return {
      completed: this.completedToDo,
      bgColor: !this.completedToDo ? "rgb(255, 196, 0)" : "green",
      borderRedButton: !this.completedToDo
        ? "0px 0px 10px 0px"
        : "0px 10px 10px 0px",
    };
  },
  methods: {
    ...mapState(["toDos"]),
    ...mapActions(["removeTodo", "attTodos", "addLocalStorage"]),
    completedTodo() {
      this.completed = true;
      this.bgColor = "green";
      this.borderRedButton = "0px 10px 10px 0px";
    },
  },
  watch: {
    completed() {
      this.attTodos(this.indextodo);
      this.addLocalStorage();
    },
  },
};
</script>

<style scoped>
@keyframes color {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mainTodo {
  display: flex;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin-bottom: 20px;
}
.barCompleted {
  width: 8px;
  border-radius: 10px 0px 0px 10px;
  animation: color 1s;
}
.todoInfos {
  flex: 1;
  padding: 0px 20px;
  min-height: 95px;
}
.todoInfos p:first-child {
  font-size: 20px;
  font-weight: 600;
}
.todoInfos p:last-child {
  font-size: 17px;
  color: rgba(0, 0, 0, 0.7);
}
.areaBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.btnCompleted {
  outline: 0 none;
  border: 0 none;
  flex: 1;
  width: 50px;
  border-radius: 0px 10px 0px 0px;
  background: #008000;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btnCompleted img {
  width: 20px;
}
.btnCompleted:hover {
  background: #00a100;
}
.btnDelete {
  outline: 0 none;
  border: 0 none;
  flex: 1;
  width: 50px;
  border-radius: 0px 0px 10px 0px;
  background: #af0000;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
}
.btnDelete img {
  width: 21px;
}
.btnDelete:hover {
  background: #ff0000;
}
</style>
