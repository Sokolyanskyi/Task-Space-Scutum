import styles from "./Budge.module.css";

export const Budge = ({todos}) => {
  return (<div className={styles.container}>
	 <div className={styles.budge}>
	   <span>У Вас</span>
	   {!todos.length ? "немає завдань" : todos.length === 1 ? "1 завдання" : todos.length > 1 ? `${todos.length} завдань` : null}
	 </div>
	 </div>
  )
}