import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tasktodo from "./Tasktodo";

const ListTasks = () => {
  const list = useSelector((state) => state.reducer_todo.Task);
  const [Status, setStatus] = useState("All");
  return (
    <div>
      <button onClick={() => setStatus("All")}>All</button>
      <button onClick={() => setStatus("DONE")}> Done</button>
      <button onClick={() => setStatus("UNDONE")}> Undone</button>
      {Status == "All"
        ? list.map((el) => <Tasktodo todo={el} />)
        : Status == "DONE"
        ? list.filter((el) => el.done).map((el) => <Tasktodo todo={el} />)
        : list
            .filter((el) => !el.done)
            .map((el) => <Tasktodo todo={el} />)}
    </div>
  );
};

export default ListTasks;
