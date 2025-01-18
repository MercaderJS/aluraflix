import { useState } from 'react'
import './App.css'


// rutas de componentes
import NavBar from './Components/NavBar/NavBar'
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
