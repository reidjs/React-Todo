// export const ADD_ITEM = "ADD_ITEM";
import { requestTodos } from '../util/todo_api_util';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => (dispatch) => (
  requestTodos().then((res) => {
    dispatch(receiveTodos(res));
  })
);
