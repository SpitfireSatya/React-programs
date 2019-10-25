
import jsonPlaceholder from "../apis/json-placeholder";

export const fetchPosts = () => {

  return async (dispatch) => {
    
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });

  }

};
