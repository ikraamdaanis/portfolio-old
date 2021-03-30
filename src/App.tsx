import React, { useState, useEffect } from 'react'

export const App = (): JSX.Element => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  useEffect(() => {
    console.clear()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Okay Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  )
}
