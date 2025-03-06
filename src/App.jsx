import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  )
}

export default App
