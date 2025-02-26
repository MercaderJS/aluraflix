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
	const [formMain, setFormMain] = useState(false);
	const [formEditMain, setFormMainEdit] = useState(false);

	// datos de form para agregar cards en <TeamArea/>
	const dataFormNewVideo = (dataForm) =>{
		const dataCard = dataForm;
		return dataCard;
	}
	//datos de form para editar card en <TeamArea/>
	const dataFormEditNewVideo = (dataForm) =>{
		const dataCard = dataForm;
		return dataCard;
	}
	//datos de form para agregar cards en <Header/>
	const dataFormHeader = (dataForm) =>{
		const dataCard = dataForm;
		return console.log(dataCard);
	}
	// datos de form para editar card en <Header/>
	const dataFormEditHeader = (dataForm) =>{
		const dataCard = dataForm;
		return dataCard;
	}

	//contexto del formulario
	const contextForm = {
		mainAddCard: {
			state: () => setFormNewVideo(!formNewVideo),
			clasName: 'form__new__video',
			funcData: dataFormNewVideo
		},
		editMainCard: {
			state: () => setFomMainEdit(!formEditMain),
			clasName: 'form__edit',
			funcData: dataFormEditNewVideo
		},
		headerAddCard: {
			state: () => setFormHeader(!formHeader),
			clasName: 'form__header',
			funcData: dataFormHeader
		},
		headerEditCard: {
			state: () => setFormEditHeader(!formEditHeader),
			clasName: 'form__edit',
			funcData: dataFormEditHeader
		},

	}

	
	//alternar formulario
	const [form, setForm] = useState(false); 
	const viewForm = () => {
		setForm(!form);
		console.log("hola");

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
				viewForm();
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
			type: "reset",
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
			{form && <Form 		/*si se clica algun boton para crear una card*/
				buttons={buttons} 
				contextForm={contextForm}
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
