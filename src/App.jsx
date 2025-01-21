import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'


// rutas de componentes
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import NewVideoPage from './Components/NewVideoPage/NewVideoPage'
import TeamArea from './Components/TeamArea/TeamArea'



function App() {
  // useState para actualizar card
  const [cards, actualizarCards] = useState([
    {
    titulo:"Frontend",
    categoria: "Front End",
    imagen:"https://github.com/harlandlohora.png",
    video: "https://www.youtube.com/embed/YlPk68ITnuM?si=5ODVJ8qAMGq-01-V",
    descripcion: "Instructor"
    },
    {
      titulo:"Frontend",
      categoria: "Front End",
      imagen:"https://github.com/harlandlohora.png",
      video: "https://www.youtube.com/embed/YlPk68ITnuM?si=5ODVJ8qAMGq-01-V",
      descripcion: "Instructor"
    },
    {
      titulo:"Frontend",
      categoria: "Front End",
      imagen:"https://github.com/harlandlohora.png",
      video: "https://www.youtube.com/embed/YlPk68ITnuM?si=5ODVJ8qAMGq-01-V",
      descripcion: "Instructor"
    }

])


  //Registrar nueva card

  const anadirCards = (card) => {
    console.log("Nuevo colaborador", card)
    actualizarCards([...cards, card])
  }

  //color y titulo de categoria 
  const categorias = [
    {
      categoria: "Back End",
      colorPrimario: "#57C278",
      
    },
    {
      categoria: "Front End",
      colorPrimario: "#82CFFA"
    },
    {
      categoria: "Innovación y Gestión",
      colorPrimario: "#A6D157"
    }
    
    ]

  return (
    <>
        <NavBar />
        {/* <Header />*/}
        <NewVideoPage
          anadirCards={anadirCards}
          categorias={categorias}

        />
        {
        categorias.map((categoria) => <TeamArea
          
          cards ={cards}
          datos={categoria}
          key={categoria.titulo}
          // cards={cards.filter(card => card.categoria === card.titulo)}
          anadirCards={anadirCards}
        />
        )
      }

        {/* <TeamArea /> */}
        <Footer />
    </>
  )
}

export default App
