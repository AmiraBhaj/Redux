import "./App.css";
import AddTask from "./Components/AddTask";
import ListTasks from "./Components/ListTasks";

function App() {
  return (
    <div className="App">
      <h1>To do App </h1>
      <AddTask/>
      <ListTasks />
    </div>
  );
}

export default App;
