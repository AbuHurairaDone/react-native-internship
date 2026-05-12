import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true);

  const incrementCounter = () => {
    setCount(count+1);
  }
  const decrementCounter = () => {
    setCount(count-1);
  }
  const resetCounter = () => {
    setCount(0);
  }
  const handleToggle = () => {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <button onClick={handleToggle}>{isVisible? "Hide App":"Show App"}</button>
      {
        isVisible &&
        <div style={{display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'center', height:'95vh'}}>
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <div>
          <button onClick={incrementCounter} style={{padding:'10px', fontSize:'24px', fontWeight:'bolder', margin:'10px'}}>+</button>
          <button onClick={decrementCounter} style={{padding:'10px 13px', fontSize:'24px', fontWeight:'bolder', margin:'10px'}}>-</button>
        </div>
        <button onClick={resetCounter} style={{padding:'10px'}}>Reset Counter</button>
      </div>
      
      }
    </>
  )
}

export default App
