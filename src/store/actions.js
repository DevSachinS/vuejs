
export const addTodo = ({ commit }, payload) => {
    commit("ADD_TODO", payload)
}

export const deleteTodo=({ commit },payload) => {
    commit("DELETE_TODO", payload)
}

export const  updateTodo = ({ commit }, todo) => {
    commit("update_todo", todo);
  }