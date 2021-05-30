import React, { useState } from 'react';

const State = () => {
  let [counter, setCounter] = useState(11110)
  // let [test, setTest] = useState(11110)

  const value = 100
  
  const increase = () => {
    setCounter(Number(counter) + 1);
  }

  const hunderedIncrease = () => {
    setCounter(() => {

      return counter += value
    });
  }

  return (
    <div>
      <h2>useState in Function Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={hunderedIncrease}>Hundered Increase</button>
      
    </div>
  )
}

export default State
