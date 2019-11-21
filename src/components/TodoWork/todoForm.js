import React , {useContext, useState } from 'react';
import {todoContext} from "../todo";

const TodoForm = () => {
   const { dispatch } = useContext(todoContext);

   const [todo, setTodo] = useState('');


     const User = localStorage.getItem('User');
   const user = User;
   const handleSubmit = (e) => {
       e.preventDefault();
       dispatch({type: 'ADD_TODO', book: {
               todo,user
           }});
       setTodo('');
   }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New To-Do Work" value={todo} onChange={(e)=>
            setTodo(e.target.value)} required/>
            <input type="submit" value='add todo'/>
        </form>
    );
}
export default TodoForm;