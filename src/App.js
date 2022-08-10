import Header from "./components/Header";
import { useState } from 'react';
import Todo from "./components/Todo";

function App() {
  const [todos, settodos] = useState([]);
  const todolist = [];
  for (let i = 0; i < todos.length; i++) {
    todolist.push(<Todo key={i} index={i} todo={todos[i]} editordel={settodos} />)
  }
  return (
    <div className="container">
      <Header addnew={settodos} />
      <table className="table table-hover">
        <thead></thead>
        <tbody>
          {todolist}
        </tbody>
      </table>

    </div>
  );
}

export default App;
