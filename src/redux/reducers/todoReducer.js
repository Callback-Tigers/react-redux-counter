import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/actionTypes";

const initialState = [

       {id:1, title:"Learn React"},
       {id:2, title:"Learn Redux"},
]  


const todoReducer = (state = initialState, action) => {
        if(action.type === ADD_TODO){
               return [...state, action.payload]
        }
        else if (action.type === REMOVE_TODO){
                return state.filter((todoObj)=> todoObj.id !== action.payload)
        }
        else if(action.type === UPDATE_TODO){
                const {id, updateTodo} = action.payload 
                // find the todoObj with id and update it 
                return state.map(toDoObj =>{
                        if(toDoObj.id === id){
                                return {...toDoObj, title: updateTodo}
                        }
                        else{
                                return toDoObj
                        }
                })

        }
        else{
            return state
        }
            
}

export default todoReducer


// todoReducer( [] , {type:ADD_TODO, payload: todo} )