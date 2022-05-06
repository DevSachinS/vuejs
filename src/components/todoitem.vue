<template>
    <div>
<span v-if="!editing" :style="{ marginRight:'50px'}">{{todo?.task}}</span>
 <input v-else  v-bind:value="todoText" @change="todoTextChange" type="text"  />

<button v-on:click="updateTodo(todo)">{{editing==true? "Update" : "Edit"}}</button>
<button v-on:click="deleteTodo(todo.id)">Delete</button>
    </div>
</template>

<script>
    export default {
        name:"ToDoItem",
         props: {
    todo: {}
  },
         data: () => ({
        editing:false,
        todoText: "",
    }),
    methods: {
      todoTextChange(e) {
      this.todoText = e.target.value;
    },
        deleteTodo: function(id) {
            this.$store.dispatch("deleteTodo", id);
        },
        updateTodo: function(todo) {
        this.editing=this.editing == true?false:true
        if (this.editing) {
        this.todoText = todo.task;
        this.$store.dispatch("updateTodo", todo);
      } else {
        todo.task = this.todoText;
      }
        }
    },
    }
</script>

