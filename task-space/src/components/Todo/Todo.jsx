import styles from './Todo.module.css'

export const Todo = ({id, title, completed}) => {
  return (
	 <div className={styles.container}>

		 <div><span className={styles.todo}>{title}</span></div>
		 <div className={styles.todoButton}>
		   <img src="/bin.svg" alt=""/>
		 </div>


	 </div>
  )
}