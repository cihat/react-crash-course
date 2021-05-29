import React, { useState } from 'react'

const Deneme = () => {
  const [counter, setCounter] = useState(0)

  function increase() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>Function Components</h2>
      <p>Counter: {counter}</p>
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={() => increase()}>Increase</button>
    </div>
  )
}

export default Deneme
