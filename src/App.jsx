import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// rutas de componentes
import NavBar from './Components/Header/NavBar/NavBar'
import Header from './Components/Header/Header'



function App() {


  return (
    <>
        
        {/* encabezado */}
        <NavBar/>
        <Header/>
    </>
  )
}

export default App
