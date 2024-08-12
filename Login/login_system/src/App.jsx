import { useEffect, useState } from 'react'


import './App.css'

function App() {
  useEffect( () => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000')
      const data = res.json()
      console.log(data)
    }
    fetchData();
    }, [])
  
  return (
    <>
    </>

  )
}

export default App
