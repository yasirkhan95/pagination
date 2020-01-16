import * as type from "../Constants/index";

const initState={
    data:[] ,
    loading: false,
    Error : []
}

export const Reducer =(state=initState,action)=>{
    switch (action.type) {
        case type.LOADING:
            
            return{
                ...state,
                loading: true
            }
        case type.LOADING_ERR :
            return {
                ...state,
                loading:false,
                Error: action.payload
            }
        case type.RECEIVED_DATA: 
            return {
                ...state,
                loading:false,
                data: action.payload
            }
    
        default:
            return{
                ...state,
            }
    }
}