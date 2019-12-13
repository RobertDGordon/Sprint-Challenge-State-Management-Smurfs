import axios from 'axios'

export const DATA_LOAD_START = "DATA_LOAD_START";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

export const DATA_POST_START = "DATA_POST_START";
export const DATA_POST_SUCCESS = "DATA_POST_SUCCESS";
export const DATA_POST_FAILURE = "DATA_POST_FAILURE";

export const getData = () => dispatch => {
    //   console.log('dispatch',dispatch);
      dispatch({ type: DATA_LOAD_START });
      axios.get('http://localhost:3333/smurfs')
      .then(res => dispatch({type: DATA_LOAD_SUCCESS, payload: res.data}))
      .catch(err => console.log(err))
    };
    
export const postData = (payload) => dispatch => {
    dispatch({type: DATA_POST_START});
    axios.post('http://localhost:3333/smurfs', payload)
    .then(res => dispatch(getData()))
    .catch(err => console.log(err))
    }