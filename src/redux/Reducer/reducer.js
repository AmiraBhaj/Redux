import { ADD, DELETE_TODO, DONE, EDIT } from "../Actiontype";

const initialState = {
  Task: [
    { text: "learn react", id: Math.random(), done: false },
    { text: "learn redux", id: Math.random(), done: false },
    { text: "learn english", id: Math.random(), done: false },
  ],
};

export const reducer_todo = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD:
      return {
        ...state,
        Task: [...state.Task, payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        Task: state.Task.filter((el) => el.id !== payload),
      };
    case DONE:
      return {
        ...state,
        Task: state.Task.map((el) =>
          el.id == payload ? { ...el, done: !el.done } : el
        ),
      };
    case EDIT:
      return {
        ...state,
        Task: state.Task.map((el) =>
          el.id == payload.id ? { ...el, text: payload.newTask } : el
        ),
      };

    default:
      return state;
  }
};
