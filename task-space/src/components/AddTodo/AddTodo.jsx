import styles from './AddTodo.module.css'

export const AddTodo = ({todos}) => {
  return (<div >
	   <div className={styles.addTodo}>
		 <input type="text" name='todo' placeholder='Введіть завдання'/>
		 <button><img src="/enter.png" alt="enter"/></button>
	   </div>
	   <div className={styles.budge}>
		<span>У Вас</span>
		 {!todos.length ? "немає завдань" : todos.length === 1 ? "1 завдання" : todos.length > 1 ? `${todos.length} завдань`:null}
	   </div>
	 </div>
  )
}