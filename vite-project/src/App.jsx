import { useState } from 'react'
import './App.css'


function App() {
  let [count, setCount] = useState(0)
  function addValue(){
    if(count<20){
      setCount(count+1)
    }
  }
  function subValue (){
    if(count>0){
      setCount(count-1)
    }
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addValue}> add </button>
        <button onClick={subValue}> remove</button>
        <p>
          {count}<code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>{count}</h2>
    </>
  )
}

export default App
