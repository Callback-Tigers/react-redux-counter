
import { DECREASE, INCREASE,RESET } from "../actions/actionTypes.js"
// import * as obj from "../actions/actionTypes.js"

let intitalState = {count:0,a:1,b:2}


const counterReducer = (state=intitalState, action) =>{

    switch(action.type){
         case INCREASE: 
               return {...state, count: state.count+action.value }

         case DECREASE: 
                return {...state, count: state.count  - 1}
         case RESET:
               return intitalState
        default: 
             return state
    }
   
}






export default counterReducer