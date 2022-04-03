import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo, done_todo, edit } from "../redux/action";
import EditTask from "./EditTask";

const Tasktodo = ({ todo }) => {
  // ALWAYS USEDISPATCH AVEC LES PARANTHESES !!!!
  const dispatch = useDispatch();
  return (
    <div>
      <h3> {todo.text}</h3>
      <EditTask Task={todo} />
      <button onClick={() => dispatch(delete_todo(todo.id))}>Delete</button>
      <button onClick={() => dispatch(done_todo(todo.id))}>
        {todo.done ? "Undone" : "Done"}
      </button>
    </div>
  );
};

export default Tasktodo;
