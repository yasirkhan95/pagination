import * as type from '../Constants/index';
import axios from 'axios';

// export const FetchDataFromApi =()=>{
//     return async (Fetch) =>{
//         const data =await axios.get("https://jsonplaceholder.typicode.com/posts");
//         const res = await data.data

//         Fetch({
//             type: type.DATA,
//             payload: res
//         })
//     }
// }

const Loading = () =>{
    return{
        type : type.LOADING
    }
}

const Loading_Err = (Err) => {
    return {
        type: type.LOADING_ERR,

        payload: Err
    }
}

export const Data_Loaded_Successfully = ()=>{
    return dispath => {
        dispath (Loading());
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {dispath ( {type:type.RECEIVED_DATA , payload: res.data});
    }).catch(e => {
        dispath(Loading_Err(e))
    })
    }
}