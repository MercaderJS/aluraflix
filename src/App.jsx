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
				const dataCard = console.log("desde edit newv", dataForm);
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
		buttonEditHeader: {
			text: "Editar video",
			image: "img/logomain.png",
			type: "button",
			action: () => {
				setFormEditHeader(!formEditHeader);
			}
		},
		buttonEditNewVideo:{
			text: "EditarVideo video",
			image: "img/logomain.png",
			type: "button",
			action: () => {
				setFormEditNewVideo(!formEditNewVideo)
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
			{/*si se clica algun boton para crear una card*/}
			{(formNewVideo || formEditNewVideo || formHeader || formEditHeader) 
				&& <Form 
				buttons={buttons}
				funcChangeContext={funcChangeContext}
			/>}
			
			<Footer />
		</>
	);
}

export default App;
