import {Todo} from "../Todo/Todo.jsx";

export const TodoList = ({todos}) => {

  return (
	 <div>
	   {todos.map((data) => {
		 return <Todo key={data.id} title={data.title} id={data.id} completed={data.completed}/>
	   })}
	   </div>
  )
}