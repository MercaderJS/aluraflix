import './Form.css'
// import Input from '../Input/Input';
// import InputSelect from '../InputSelect/InputSelect';
import ButtonForm from '../ButonForm/ButonForm';
import Select from '../Select/Select';
import InputText from '../InputText/InputText';
import InputDesc from '../InputDesc/InputDesc';
import { useState } from 'react';


function Form(props) {

    const { anadirCards, categorias  } = props;
    
    // evita que se recargue la pagina al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)

        let datosEnviar = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }
        anadirCards(datosEnviar);
        console.log(datosEnviar)

    }


    // useState para cada campo del formulario
    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [valor, actualizarValor] = useState("")


    return <section className='form__container'>
        <h2>
            Crear Tarjeta
        </h2>
        <form action="" title='Formulario de nuevo video'
            onSubmit={enviarFormulario}
        >

            <InputText
                required
                titulo="Título"
                valor={titulo}
                placeholder="Ingresar nombre"
                actualizarValor={actualizarTitulo}
            />
            <Select
                required
                titulo="Categoría"
                valor={categoria}
                actualizarValor={actualizarCategoria}
                categorias={categorias}
            />
            <InputText
                required
                titulo="Imagen"
                valor={imagen}
                placeholder="Ingresa una URL valida"
                actualizarValor={actualizarImagen}
            />
            <InputText
                titulo="Video"
                placeholder="Ingresa el enlace del video"
                valor={video}
                required
                actualizarValor={actualizarVideo}
            />
            <InputDesc
                required
                titulo="Descripción"
                valor={descripcion}
                placeholder="¿de que trata este video?"
                actualizarValor={actualizarDescripcion}

            />
            <ButtonForm className='button'

            />
        </form>
    </section>

}


export default Form