import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("");
  
  //add todo 
  const handleAddTodo = () => {
    if(input.trim() === ""){return;}
    const newTodo = {
      id:Date.now(),
      text: input,
    }
    setTodos([...todos, newTodo])
    setInput("")
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  // edit todo
  const handleEdit = (id) => {
    let todoToEdit = todos.find((todo)=> todo.id===id);
    console.log(todoToEdit);
    setInput(todoToEdit.text)
    handleDelete(id);
  }
  //delete todo
  const handleDelete = (id) => {
    let newTodoList = todos.filter((todo)=> todo.id !== id);
     setTodos(newTodoList);
  }

  return (
    <>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>Todo List App</h1>
        <div>
          <input 
            style={{outline:'none', padding:'10px', borderRadius:'10px 0px 0px 10px', border:'1px solid black'}}
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter a Todo"
          />
          <button style={{ padding:"10px", borderRadius:"0px 10px 10px 0px", border:'1px solid black' }} onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div>
          {
            todos.length === 0 ? <p style={{margin:'10px', color:'gray'}}>Todos Not Exist</p>
                    : todos.map((todo)=>{
                      return <div key={todo.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'300px', margin:'10px', border:'1px solid gray', borderRadius:'10px'}}>
                        <p style={{padding:'0px 5px'}}>{todo.text}</p>
                        <div>
                          <button style={{padding:'10px', borderRadius:'10px',marginRight:'5px', border:'none'}} onClick={()=>handleEdit(todo.id)}>edit</button>
                          <button style={{padding:'10px', borderRadius:'10px', border:'none', marginRight:'5px'}} onClick={()=>handleDelete(todo.id)}>delete</button>
                        </div>
                      </div>
                    })
          }
        </div>
      </div>
    </>
  )
}

export default App
