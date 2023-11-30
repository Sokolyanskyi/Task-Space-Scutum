
import styles from './App.module.css'
import {AddTodo} from "./components/AddTodo/AddTodo.jsx";
import {TodoList} from "./components/TodoList/TodoList.jsx";
import {useEffect, useState} from "react";
import {Loader} from "./components/Loader/Loader.jsx";
import axios from "axios";

function App() {
 const [todos, setTodos] = useState([])
useEffect(()=> {
  axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
    setTodos(result.data)
  })
},[])

  return (

    <div className={styles.container}>
      <div className={styles.block}>
      <h1 className={styles.title}>Test ToDo</h1>
      <AddTodo todos={todos}/>
      {todos ? <TodoList todos={todos}/>:<Loader/>}
      </div>
    </div>
  )
}

export default App
