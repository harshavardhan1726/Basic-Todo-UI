import "./App.css";
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"


function App() {
  
  return <center class='todo-container'>
    
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div class="items-container">
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </div>
    

  </center>
}

export default App
