
    // DELETE_TODO: (state, payload) => {
    //     const index = state.todos.findIndex(todo => todo.id === payload);
    //     state.todos.splice(index, 1);
    // }

export const ADD_TODO = ({state}, payload) => {
    const newTask = {
        id: Math.random().toString(),
        task: payload.task,
    }
    state.todos.unshift(newTask);
}

 export const DELETE_TODO =({state}, id) => {
        console.log(state.todos,id)
        state.todos=state.todos.filter(todos => todos.id !== id)
    }

    export const  update_todo= (state, todo) => {
        let index = state.todos.findIndex((t) => t.id == todo.id);
        if (index != -1) {
          state.todos[index] = todo;
        }
      }