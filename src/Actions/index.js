import * as type from '../Constants/index';
import axios from 'axios';

export const FetchDataFromApi =()=>{
    return async (Fetch) =>{
        const data =await axios.get("https://jsonplaceholder.typicode.com/posts");
        const res = await data.data

        Fetch({
            type: type.DATA,
            payload: res
        })
    }
}

// const Loading = () => {
//     return {
//         type: type.LOADING_DATA
//     }
// }

// const Error_Load = () =>{
//     return{
//         type: type.ERROR_LOAD ,
//         payload : err
//     }
// }

// const Loaded = () =>{
//     return {
        
//     }
// }

// export const SuccussFullyLoadData = () => {
//     return dispatch => {
//         dispatch(Loading());
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res=> {
//             dispatch (Loaded())
//         })
//     }
// }