import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'


// rutas de componentes
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import NewVideoPage from './Components/NewVideoPage/NewVideoPage'



function App() {


  return (
    <>
        
        {/* encabezado */}
        <NavBar />
        {/* <Header /> */}
        <NewVideoPage />
        <Footer />
    </>
  )
}

export default App
