import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <button onClick={increment}>+</button>

      <button onClick={handleReset}>Reset</button>

      <button onClick={decrement}>-</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default App
