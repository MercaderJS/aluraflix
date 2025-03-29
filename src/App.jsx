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

	// informacion de cards en header
	const [cardHeader, setCardHeader] = useState([]);

	// informacion cards en TeamArea
	const [cardsMain, setCardsMain] = useState([]);

	// alternar boton de agregar card en header
	const [ buttonAddCardHeader, setbuttonAddCard ] = useState(true);

	// cards en TeamArea filtradas al clicar boton edit
	const [ newCardsMain, setNewCardsMain ] = useState([]);
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
			selector: 'new__video--form',
			funcData: (dataForm) => {
				setCardsMain([...cardsMain,dataForm])
			}
		},
		editMainCard: {
			stateFunc: () => setFormEditNewVideo(!formEditNewVideo),
			selector: 'edit__card--form',
			funcData: (dataForm) => {
				setCardsMain([...newCardsMain,dataForm])

			}
		},
		headerAddCard: {
			stateFunc: () => {
				setFormHeader(!formHeader),
				setbuttonAddCard(!buttonAddCardHeader);
			},
			selector: 'header__form',
			funcData: (dataForm) => {
				setCardHeader([...cardHeader,dataForm]);
			}
		},
		headerEditCard: {
			stateFunc: () => setFormEditHeader(!formEditHeader),
			selector: 'edit__form',
			funcData: (dataForm) => {
				setCardHeader([...cardsMain,...dataForm]);
			
			}
		},

	}


	//====cambio de funcion al enviar datos de formulario====//
	const funcChangeContext = () => {
		if (formNewVideo) {
			return {
				funcData: contextForm.mainAddCard.funcData,
				stateFunc: contextForm.mainAddCard.stateFunc,
				selector: contextForm.mainAddCard.selector,
				state: formNewVideo
			}

		} else if (formHeader) {
			return {
				funcData: contextForm.headerAddCard.funcData,
				stateFunc: contextForm.headerAddCard.stateFunc,
				stateBtn: contextForm.headerAddCard.stateFuncBtnAdd,
				selector: contextForm.headerAddCard.selector,
				state: formHeader
			}

		} else if (formEditHeader) {
			return {
				funcData: contextForm.headerEditCard.funcData,
				stateFunc: contextForm.headerEditCard.stateFunc,
				selector: contextForm.headerEditCard.selector,
				state: formEditHeader
			}

		} else if (formEditNewVideo) {
			return {
				funcData: contextForm.editMainCard.funcData,
				stateFunc: contextForm.editMainCard.stateFunc,
				selector: contextForm.editMainCard.selector,
				state: formEditNewVideo
			}
		}
	}

	const logo = "img/image 1.png";
	// Botones 
	const buttons = {
		buttonHome: {
			selector: "home__button",
			text: "Home",
			image: "",
			type: "button",
			action: (id) => {
				window.location.href = "/";
			}
		},
		buttonHeader: {
			selector: "header__button",
			text: "Agregar video",
			image: "img/logomain.png",
			type: "button",
			action: (id) => {
				setFormHeader(!formHeader);
			}
		},
		buttonDeleteHeader: {
			selector: "header__delete--button",
			text: "Eliminar",
			image: "img/logomain.png",
			type: "button",
			action: (id) => {
				window.location.href = '/';
			}
		},
		buttonEditHeader: {
			selector: "header__edit--button",
			text: "Editar video",
			image: "img/logomain.png",
			type: "button",
			action: (id) => {
				setFormEditHeader(!formEditHeader);
			}
		},
		buttonNewVideo: {
			selector: "new__video--button",
			text: "Nuevo Video",
			image: "",
			type: "button",
			action: (id) => {
				setFormNewVideo(!formNewVideo);
			}
		},
		buttonEditNewVideo: {
			selector: "new__video__edit--button",
			text: "EditarVideo video",
			image: "img/logomain.png",
			type: "button",
			action: (id) => {
				setFormEditNewVideo(!formEditNewVideo);
				setNewCardsMain(cardsMain.filter((card)=> card.id !== id));
			}
		},
		buttonDeleteMain: {
			selector: "header__delete--button",
			text: "Eliminar",
			image: "img/logomain.png",
			type: "button",
			action: (id) => {				
				setCardsMain(cardsMain.filter((card) => card.id !== id));
			}
		},
		buttonFormSave: {
			selector: "form__save--button",
			text: "Añadir",
			image: "",
			type: "submit",
			action: (id) => {
				
			}
		},
		buttonFormClean: {
			selector: "form__clean--button",
			text: "Limpiar",
			image: "",
			type: "reset",
			action: (id) => {

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
