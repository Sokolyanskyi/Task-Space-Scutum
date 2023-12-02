import styles from './Todo.module.css'
import classNames from "classnames";

export const Todo = ({todos, setTodos, todo, setEditTodo}) => {
  const handleDelete = (id) => {
	let deleted = todos.filter((todo) => todo.id !== id)
	setTodos(deleted)
	localStorage.setItem('todos', JSON.stringify(deleted))
  }

  const handleEdit = ({id}) => {
	const findTodo = todos.find((todo) => todo.id === id)
	setEditTodo(findTodo)
  }
  const handleCompleted = (todo) => {
	let edited = todos.map((item) => {
	  if (item.id === todo.id) {

		return {...item, completed: !item.completed}
	  }
	  return item;
	})
	setTodos(edited)
	localStorage.setItem('todos', JSON.stringify(edited))

  }

  return (
	 <div className={classNames(styles.container, {[styles.containerDone]: todo.completed})}>

	   <div className={styles.todo} onClick={() => handleCompleted(todo)}>{todo.title}
	   </div>
	   <div className={styles.buttonsBlock}>
		 <div className={styles.edit} onClick={() => {
		   handleEdit(todo)
		 }}
		 >
		   <img src="/note.svg" alt="note"/>
		 </div>
		 <div className={styles.bin} onClick={() => {
		   handleDelete(todo.id)
		 }}>
		   <img src="/bin.svg" alt="bin"/>
		 </div>
	   </div>


	 </div>
  )
}