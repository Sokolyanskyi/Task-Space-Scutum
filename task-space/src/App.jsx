import styles from './App.module.css'
import {AddTodo} from "./components/AddTodo/AddTodo.jsx";
import {TodoList} from "./components/TodoList/TodoList.jsx";
import {useEffect, useState} from "react";
import {Loader} from "./components/Loader/Loader.jsx";
import axios from "axios";
import {Pagination} from "./components/Pagination/Pagination.jsx";
import {PaginationControl} from "./components/Pagination/PaginationControl/PaginationControl.jsx";

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [todoPerPage] = useState(5)
  const [pageNumberLimit, setPageNumberLimit] = useState(10)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
const [editTodo, setEditTodo] = useState(null)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(todos.length / todoPerPage); i++) {
	pageNumbers.push(i)
  }

  useEffect(() => {

	const getTodos = async () => {
	  setLoading(true)
	  const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
	  setTodos(result.data)
	  setLoading(false)

	}

	getTodos()
  }, [todos.title])


  const lastTodoIndex = currentPage * todoPerPage;
  const firstTodoIndex = lastTodoIndex - todoPerPage;
  const currentTodo = todos.slice(firstTodoIndex, lastTodoIndex)

  const paginate = (pageNumber) => {
	setCurrentPage(pageNumber)
  }
  const nextPage = () => {
	setCurrentPage(currentPage + 1)
	if (currentPage + 1 > maxPageNumberLimit) {
	  setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
	  setMinPageNumberLimit((minPageNumberLimit + pageNumberLimit))
	}
  }
  const prevPage = () => {
	setCurrentPage(currentPage - 1)
	if ((currentPage - 1) % pageNumberLimit === 0) {
	  setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
	  setMinPageNumberLimit((minPageNumberLimit - pageNumberLimit))
	}
  }

  return (

	 <div className={styles.container}>
	   <div className={styles.block}>
		 <h1 className={styles.title}>Test ToDo</h1>
		 <AddTodo todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} editTodo={editTodo}/>
		 <PaginationControl nextPage={nextPage} prevPage={prevPage} currentPage={currentPage} todos={todos}
							pageNumbers={pageNumbers}/>
		 {todos ? <TodoList todos={currentTodo} totalTodos={todos} loading={loading} setTodos={setTodos} setEditTodo={setEditTodo}/> : <Loader/>}
		 <Pagination todoPerPage={todoPerPage} paginate={paginate} currentPage={currentPage}
					 maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit}
					 pageNumbers={pageNumbers}/>
	   </div>
	 </div>
  )
}

export default App
