import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  // let temp;
  const [timer, setTimer] = useState(0)


  useEffect(() => {
    console.log('useEffect')
  }, [counter, counter2])

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTimer((timer) => {
        timer += 1
        temp = timer
        return timer
      })
    }, 1000)
    return () => clearInterval(myTimer)
  }, [])

  useEffect(() => {
    console.log('Timer: ', timer)
  }, [timer])

  return (
    <div>
      <h2>useEffect in Function Component</h2>
      <p>Counter: {counter}</p>
      <p>Counter2: {counter2}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter2(counter2 + 2)}>Increase</button>
    </div>
  )
}

export default UseEffect
