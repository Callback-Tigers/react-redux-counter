import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes"; 


// Action Creators

// {id:1, title: "Walk"}


export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const removeTodo = (todo_id) => {
      return {
        type: REMOVE_TODO,
        payload: todo_id
}
}

export const updateTodo = (todo_id, updateTodo) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id: todo_id,
            updateTodo: updateTodo
        }
    }
}