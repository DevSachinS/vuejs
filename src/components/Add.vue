<template>
<HeaderMenu/>
    <input v-model="task" type="text" :style="{ marginTop:'50px'}"/>
   <button v-on:click="addTodo">Add</button>

<!-- <div v-for="items in todos.state.todos" :key='items.id' :style="{ marginTop:'10px'}">
<span v-if="!editing" :style="{ marginRight:'50px'}">{{items?.task}}</span>
<div v-else> <input  v-bind:value="todoText" @change="todoTextChange" type="text"  /></div>

<button v-on:click="updateTodo(items)">{{editing==true? "Update" : "Edit"}}</button>
<button v-on:click="deleteTodo(items.id)">Delete</button>
</div> -->
<div :style="{ marginTop:'20px'}"><ToDoList/></div>

</template>

<script>
import HeaderMenu from "./Header.vue"
// import {mapState} from "vuex"
import ToDoList from "./todolist.vue"
export default {
  name:"AddPage",
  components:{
      HeaderMenu,
      ToDoList
  },

   data: () => ({
        task: "",
        editing:false,
        todoText: "",
    }),
    methods: {
        addTodo: function() {
            this.$store.dispatch("addTodo", this.$data);
            this.task = "";
        },
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
      computed: {
        todos() {
            return this.$store.state;
        }
    },
 
}
</script>