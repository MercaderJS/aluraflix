import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

// rutas de componentes
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import NewVideoPage from './Components/NewVideoPage/NewVideoPage'
import TeamArea from './Components/TeamArea/TeamArea'


function App() {
  // Recupera las tarjetas del localStorage al cargar la página
  const [cards, actualizarCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : [];
  });

  // Registrar nueva tarjeta
  const anadirCards = (card) => {
    const nuevasCards = [...cards, card];
    actualizarCards(nuevasCards);
    localStorage.setItem('cards', JSON.stringify(nuevasCards)); // Guarda en localStorage
  };

  // Eliminar tarjeta
  const eliminarCard = (titulo) => {
    const nuevasCards = cards.filter((card, index) => card.titulo !== titulo);
    localStorage.setItem('cards', JSON.stringify(nuevasCards)); // Actualiza en localStorage
    alert("El video ha sido eliminado");
    actualizarCards(nuevasCards);
    console.log("borrando", nuevasCards);
  };

  const logo = "img/image 1.png";
  // Botones 
  const buttons = {
    buttonHome: {
      text: "Home",
      image: "",
      action: () => {
        window.location.href = "/";
      }
    },
    buttonNewVideo: {
      text: "Nuevo Video",
      image: "",
      action: () => {
        window.location.href = "/";
      }
    },
    buttonHeader: {
      text: "Agregar video",
      image: "img/logomain.png",
      action: () => {
        window.location.href = '/'
      }
    },
    buttonDeleteCard: {
      text: "Agregar video",
      image: "img/logomain.png",
      action: () => {
        window.location.href = '/'
      }
    },
    buttonEditCard: {
      text: "Agregar video",
      image: "img/logomain.png",
      action: () => {
        window.location.href = '/';
      }
    }
  }

  // Actualiza automáticamente en localStorage si cambia el estado de cards
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  // Categorías y colores
  const categorias = [
    {
      
      categoria: "Back End",
      colorPrimario: "#57C278",
    },
    {
      categoria: "Front End",
      colorPrimario: "#82CFFA",
    },
    {
      categoria: "Innovación y Gestión",
      colorPrimario: "#A6D157",
    },
  ];

  return (
    <>
      <NavBar
        buttons={buttons}
        logo={logo}
      />
      <Header
        buttons={buttons}

      />
      {/* <NewVideoPage
        categorias={categorias.map((categoria) => categoria.categoria)}
        anadirCards={anadirCards}
      /> */}
      {/* {categorias.map((categoria) => (
        <TeamArea
          eliminarCard={eliminarCard}
          datos={categoria}
          key={categoria.categoria}
          cards={cards.filter((card) => card.categoria === categoria.categoria)}
          anadirCards={anadirCards}
        />
      ))}
      <TeamArea /> */}
      <Footer />
    </>
  );
}

export default App;
