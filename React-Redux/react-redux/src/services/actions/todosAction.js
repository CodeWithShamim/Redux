import axios from "axios";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstant";

const getTodos = () => {
  return async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({ type: GET_TODOS_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: GET_TODOS_FAILED, payload: error?.message });
    }
  };
};

export default getTodos;
