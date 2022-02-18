import React, { useState } from 'react';
import './App.scss'
function App() {
    const localData=JSON.parse( localStorage.getItem('todos'))
    let [todos, setTodos]=React.useState(localData || [])

    

    function handleClick(evt) {
        if(evt.keyCode === 13){
        const newTodo = {
            id:todos.at(-1)? todos.at(-1).id + 1 : 1,
            text:evt.target.value,
            isComplated:false
        }
        evt.target.value=null;
        setTodos([...todos, newTodo]) 
        localStorage.setItem('todos',JSON.stringify([...todos, newTodo]))

    }
}
    function handleDelete(id) {
        let filteredTodos=todos.filter(todo => todo.id!==id)
        setTodos(filteredTodos)

         localStorage.setItem('todos',JSON.stringify(filteredTodos))       
    }
    const [todoes,setTodo] = useState()

    function handleEdit(todo) {
        let Label=prompt('holat', )
      
        setTodo(todo.text = Label)
        localStorage.setItem('todos',JSON.stringify(todo.text = Label))
        
     
    }

    function handleChange(id, isComplated) {
        todos.forEach((todo)=>{
            if(todo.id===id){
                todo.isComplated=isComplated
            }
        })
        setTodo([...todos])
        localStorage.setItem('todos',JSON.stringify([...todos]))    
    }
  

    return (
        <>      
        <input  className='input' onKeyUp={handleClick} type='text' />
        <ul>
            {todos.map(todo=>(
                <li className='todo-item' key={todo.id} >
                    <input defaultChecked={todo.isComplated} 
                    onChange={(evt)=>handleChange(todo.id, evt.target.checked)} className='todo-input' type='checkbox' />
                  <div className='todo-label'>
                        <label className={`${todo.isComplated ? 'line':' '}`}>{todo.text}</label>
                  </div>
                    <button onClick={()=>{handleEdit(todo)}} className='todo-edit' >Edit</button>
                    <button className='todo-delete' onClick={()=>handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}
export default App;