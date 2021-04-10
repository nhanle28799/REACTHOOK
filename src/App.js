import { useState } from 'react';
import './App.css'
import ToDoForm from './component/ToDoForm';
import TodoList from './component/TodoList/index';

function App() {
  const [toDoList, setTodoList] = useState([
    { id: 1, title: 'haha' },
    { id: 2, title: 'hihi' },
    { id: 3, title: 'hoho' },
  ]);
  function handleTodoClick(todo) {
    const index = toDoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodo = [...toDoList];
    newTodo.splice(index, 1)
    setTodoList(newTodo)
  }
  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: toDoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...toDoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
  }
  return (
    <div className="app">
      <h1>Welcom to SASS</h1>
      <TodoList todos={toDoList} onTodoClick={handleTodoClick} />
      <ToDoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}
export default App;
