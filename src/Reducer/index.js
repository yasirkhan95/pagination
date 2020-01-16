import * as type from "../Constants/index";

const initState={
    data:[]
}

export const Reducer =(state=initState,action)=>{
    switch (action.type) {
        case type.DATA:
            
            return{
                data:action.payload
            }
    
        default:
            return{
                ...state,
            }
    }
}