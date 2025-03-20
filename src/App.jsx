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

	// informaion de cards en header
	const [cardHeader, setCardHeader] = useState([]);

	// informacion cards en TeamArea
	const [cardsMain, setCardsMain] = useState([]);

	// alternar boton de agregar card en header
	const [ buttonAddCardHeader, setbuttonAddCard ] = useState(true);

	// categorias de c
	const categories = [
		{
			title: "Back End",
			primaryColor: "#57C278",
		},
		{
			title: "Front End",
			primaryColor: "#82CFFA",
		},
		{
			title: "Innovación y Gestión",
			primaryColor: "#A6D157",
		},
	];
	
	//contexto del formulario
	const contextForm = {
		mainAddCard: {
			stateFunc: () => setFormNewVideo(!formNewVideo),
			clasName: 'form__new__video',
			funcData: (dataForm) => {
				setCardsMain([...cardsMain,dataForm])
			}
		},
		editMainCard: {
			stateFunc: () => setFormEditNewVideo(!formEditNewVideo),
			clasName: 'form__edit',
			funcData: (dataForm) => {
				setCardsMain([{...cardsMain}]);
			}
		},
		headerAddCard: {
			stateFunc: () => {
				setFormHeader(!formHeader),
				setbuttonAddCard(!buttonAddCardHeader);
			},
			clasName: 'form__header',
			funcData: (dataForm) => {
				setCardHeader([...cardHeader,dataForm]);
			}
		},
		headerEditCard: {
			stateFunc: () => setFormEditHeader(!formEditHeader),
			clasName: 'form__edit',
			funcData: (dataForm) => {
				setCardHeader([{...dataForm}]);
			
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
				stateBtn: contextForm.headerAddCard.stateFuncBtnAdd,
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
		buttonHeader: {
			text: "Agregar video",
			image: "img/logomain.png",
			type: "button",
			action: () => {
				setFormHeader(!formHeader);
			}
		},
		buttonDeleteHeader: {
			text: "Eliminar",
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
		buttonNewVideo: {
			text: "Nuevo Video",
			image: "",
			type: "button",
			action: () => {
				setFormNewVideo(!formNewVideo);
			}
		},
		buttonEditNewVideo: {
			text: "EditarVideo video",
			image: "img/logomain.png",
			type: "button",
			action: () => {
				setFormEditNewVideo(!formEditNewVideo)
			}
		},
		buttonDeleteMain: {
			text: "Eliminar",
			image: "img/logomain.png",
			type: "button",
			action: (title) => {				
				setCardsMain(cardsMain.filter((card) => card.title !== title));
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

	return (
		<>
			<NavBar
				buttons={buttons}
				logo={logo}
			/>
			<Header
				buttons={buttons}
				cardHeader={cardHeader}
				stateButton={buttonAddCardHeader}
			/>
			{/*si se clica algun boton para crear una card*/}
			{(formNewVideo || formEditNewVideo || formHeader || formEditHeader)
				&& <Form
					buttons={buttons}
					funcChangeContext={funcChangeContext}
				/>
			}
			{
			categories.map((category)=>
					<TeamArea
						key={category.title}
						title={category.title}
						primaryColor={category.primaryColor}
						cards={cardsMain.filter((card)=>card.category === category.title)}
						cardKey={cardsMain.title}
						buttonEditNewVideo={buttons.buttonEditNewVideo}
						buttonDeleteMain={buttons.buttonDeleteMain}
					/>)
			}
			<Footer />
		</>
		
	);
	
}
export default App;
