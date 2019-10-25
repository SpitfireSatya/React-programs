
import jsonPlaceholder from "../apis/json-placeholder";

export const fetchPost = () => {

  return async (dispatch) => {
    
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POST',
      payload: response.data
    });

  }

};
