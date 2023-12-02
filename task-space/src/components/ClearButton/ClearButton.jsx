import styles from './ClearButton.module.css'
export const ClearButton = ({setTodos}) => {
  const handleClear = () => {
	setTodos([])
	localStorage.removeItem('todos')
  }
  return (
	 <div className={styles.container}>
	   <button onClick={handleClear}>Очистити список</button>
	 </div>
  )
}