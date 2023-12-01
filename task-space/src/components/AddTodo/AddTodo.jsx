import styles from './AddTodo.module.css'
import {useEffect, useState} from "react";
import {v4 as uuidV4} from 'uuid'
export const AddTodo = ({todos, setTodos, editTodo, setEditTodo}) => {
  const [input, setInput] = useState('')
  useEffect(() => {
	if (editTodo) {
	  setInput(editTodo.title)
	} else {
	  setInput('')
	}
  }, [setInput, editTodo])
  const onInputChange = (event) => {
	setInput(event.target.value)
  }
  const updateTodo =(title, id, completed) => {
	const newTodo = todos.map((todo) => {
	  todo.id === id ? { title, id, completed}: todo
	})
	setTodos(newTodo)
	setEditTodo('')
  }
  const onFormSubmit = (event) => {
	event.preventDefault();
	if (!editTodo) {
	  setTodos([...todos, {id: uuidV4(), title: input, completed: false}])
	  setInput('')
	} else {
	  updateTodo(input, editTodo.id, editTodo.completed)
	}
  }

  return (<div>
	   <form className={styles.addTodo} onSubmit={onFormSubmit}>
		 <input type="text" name='todo' placeholder='Введіть завдання' value={input} required onChange={onInputChange}/>
		 <button type='submit'><img src="/enter.png" alt="enter"/></button>
	   </form>

	 </div>
  )
}