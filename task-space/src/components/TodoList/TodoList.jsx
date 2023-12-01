import {Todo} from "./Todo/Todo.jsx";
import {Loader} from "../Loader/Loader.jsx";
import {Budge} from "../Budge/Budge.jsx";

export const TodoList = ({todos, loading, totalTodos, setTodos, setEditTodo}) => {




  if (loading) {
	return <Loader/>
  }
  return (
	 <div>
	   <Budge todos={totalTodos}/>
	   {todos.map((data) => {
		 return <Todo key={data.id} todo={data} setTodos={setTodos} todos={totalTodos} setEditTodo={setEditTodo}/>
	   })}
	 </div>
  )
}