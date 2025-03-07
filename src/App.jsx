import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

// rutas de componentes
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import NewVideoPage from './Components/NewVideoPage/NewVideoPage'
import TeamArea from './Components/TeamArea/TeamArea'
import Form from './Components/Form/Form'


function App() {
	/* // Recupera las tarjetas del localStorage al cargar la página
	// const [cards, actualizarCards] = useState(() => {
	//   const savedCards = localStorage.getItem('cards');
	//   return savedCards ? JSON.parse(savedCards) : [];
	// });

	// // Registrar nueva tarjeta
	// const anadirCards = (card) => {
	//   const nuevasCards = [...cards, card];
	//   actualizarCards(nuevasCards);
	//   localStorage.setItem('cards', JSON.stringify(nuevasCards)); // Guarda en localStorage
	// };

	// // Eliminar tarjeta
	// const eliminarCard = (titulo) => {
	//   const nuevasCards = cards.filter((card, index) => card.titulo != titulo);
	//   localStorage.setItem('cards', JSON.stringify(nuevasCards)); // Actualiza en localStorage
	//   alert("El video ha sido eliminado");
	//   actualizarCards(nuevasCards);
	//   console.log("borrando", nuevasCards);
	// };
	*/

	//estado del contexto del formulario
	const [formNewVideo, setFormNewVideo] = useState(false);
	const [formHeader, setFormHeader] = useState(false);
	const [formEditHeader, setFormEditHeader] = useState(false);
	const [formEditNewVideo, setFormEditNewVideo] = useState(false);


	//contexto del formulario
	const contextForm = {
		mainAddCard: {
			stateFunc: () => setFormNewVideo(!formNewVideo),
			clasName: 'form__new__video',
			funcData: (dataForm) => {
				const dataCard = console.log("desde newV", dataForm);
				return dataCard;
			}
		},
		editMainCard: {
			stateFunc: () => setFormEditNewVideo(!formEditNewVideo),
			clasName: 'form__edit',
			funcData: (dataForm) => {
				const dataCard = console.log("desde newv", dataForm);
				return dataCard;
			}
		},
		headerAddCard: {
			stateFunc: () => setFormHeader(!formHeader),
			clasName: 'form__header',
			funcData: (dataForm) => {
				const dataCard = dataForm;
				return console.log("desde header", dataCard);
			}
		},
		headerEditCard: {
			stateFunc: () => setFormEditHeader(!formEditHeader),
			clasName: 'form__edit',
			funcData: (dataForm) => {
				const dataCard = dataForm;
				return console.log("desde header edit", dataCard);
			}
		},

	}


	//====cambio de funcion al enviar datos de formulario====//
	const funcChangeContext = () => {
		if (formNewVideo) {
			return {
				funcData: contextForm.mainAddCard.funcData,
				stateFunc: contextForm.mainAddCard.stateFunc,
				class: contextForm.mainAddCard.clasName,
				state: formNewVideo
			}

		} else if (formHeader) {
			return {
				funcData: contextForm.headerAddCard.funcData,
				stateFunc: contextForm.headerAddCard.stateFunc,
				class: contextForm.headerAddCard.clasName,
				state: formHeader
			}

		} else if (formEditHeader) {
			return {
				funcData: contextForm.headerEditCard.funcData,
				stateFunc: contextForm.headerEditCard.stateFunc,
				class: contextForm.headerEditCard.clasName,
				state: formEditHeader
			}

		} else if (formEditNewVideo) {
			return {
				funcData: contextForm.editMainCard.funcData,
				stateFunc: contextForm.editMainCard.stateFunc,
				class: contextForm.editMainCard.clasName,
				state: formEditNewVideo
			}
		}
	}

	const logo = "img/image 1.png";
	// Botones 
	const buttons = {
		buttonHome: {
			text: "Home",
			image: "",
			type: "button",
			action: () => {
				window.location.href = "/";
			}
		},
		buttonNewVideo: {
			text: "Nuevo Video",
			image: "",
			type: "button",
			action: () => {
				setFormNewVideo(!formNewVideo);
			}
		},
		buttonHeader: {
			text: "Agregar video",
			image: "img/logomain.png",
			type: "button",
			action: () => {
				setFormHeader(!formHeader);
			}
		},
		buttonDeleteCard: {
			text: "Agregar video",
			image: "img/logomain.png",
			type: "button",
			action: () => {
				window.location.href = '/';
			}
		},
		buttonEditCard: {
			text: "Agregar video",
			image: "img/logomain.png",
			type: "button",
			action: () => {
				
			}
		},
		buttonFormSave: {
			text: "Añadir",
			image: "",
			type: "submit",
			action: () => {

			}
		},
		buttonFormClean: {
			text: "Limpiar",
			image: "",
			type: "submit",
			action: () => {

			}
		}
	}

	// // Actualiza automáticamente en localStorage si cambia el estado de cards
	// useEffect(() => {
	//   localStorage.setItem('cards', JSON.stringify(cards));
	// }, [cards]);

	// Categorías y colores
	const categories = [
		{
			category: "Back End",
			primaryColor: "#57C278",
		},
		{
			category: "Front End",
			primaryColor: "#82CFFA",
		},
		{
			category: "Innovación y Gestión",
			primaryColor: "#A6D157",
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
			{(formNewVideo || formEditNewVideo || formHeader || formEditHeader) && <Form 	/*si se clica algun boton para crear una card*/
				buttons={buttons}
				funcChangeContext={funcChangeContext}
			/>}
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
