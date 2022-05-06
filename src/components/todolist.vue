<template>
  <div>
    <div v-for="todo in todos.state.todos" :key="todo.id" :style="{ marginBottom:'10px'}" >
      <ToDoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/todoitem.vue";


export default {
    name:"ToDoList",
  components: {
    ToDoItem
  },
  
  computed: {
        todos() {
            return this.$store.state;
        }
    },
};
</script>

