import {FETCH_POSTS,ERROR} from './types';
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    try{
      const res = await axios.get(`https//jsonplaceholder.typicode.com/todos`)
        dispatch( {
            type: FETCH_POSTS,
            payload: res.data,
        })
    }
    catch(error) {
       
       
        dispatch( {
            type: ERROR,
            payload: error,
        })
    }
  }
 
 


// import { FETCH_POSTS, NEW_POST } from './types';

// export const fetchPosts = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };

// export const createPost = postData => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     );
// };