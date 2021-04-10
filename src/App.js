import { useState, useEffect } from 'react';
import './App.css'
import PostList from './component/PostList';
import ToDoForm from './component/ToDoForm';
import TodoList from './component/TodoList/index';

function App() {
  const [toDoList, setTodoList] = useState([
    { id: 1, title: 'haha' },
    { id: 2, title: 'hihi' },
    { id: 3, title: 'hoho' },
  ]);
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {

    async function fetchPostList() {
      try {
        const url = 'http://js-post-api.herokuapp.com/api/post?_limit=1&page=1';
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)
        const { data } = responseJson;
        setPostsList(data);
      } catch (error) {
        console.log('Failed to fetch post', error.message)
      }
    }
  }, [])
  useEffect(() => {
    console.log('TODO list effect')
  })
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
      {/* <TodoList todos={toDoList} onTodoClick={handleTodoClick} />
      <ToDoForm onSubmit={handleTodoFormSubmit} /> */}
      <PostList posts={postsList} />
    </div>
  );
}
export default App;
