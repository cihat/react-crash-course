import React, { useEffect, useState } from 'react'

const Time = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000)
    console.log(date)
    return () => {
      
    }
  }, [date])
  return (
    <div>
      <h1>Date with useEffect, useState</h1>
      <h2>it is {date}</h2>
    </div>
  )
}

export default Time
