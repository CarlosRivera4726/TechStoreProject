import { useState } from 'react'
import { useLocation } from 'react-router'
function App() {
  const path = useLocation();

  console.log('Current path:', path.pathname); // Log the current path to the console

  return (
    <>
      <div>
        default
      </div>
    </>
  )
}

export default App
