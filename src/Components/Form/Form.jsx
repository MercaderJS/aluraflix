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
    const submitForm= (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)

        let datosEnviar = {
            title,
            category,
            imag,
            video,
            description
        }
        anadirCards(datosEnviar);
        console.log(datosEnviar)

    }


    // useState para cada campo del formulario
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [img, setImg] = useState("")
    const [video, setVideo] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")


    return <section className='form__container'>
        <h2>
            Crear Tarjeta
        </h2>
        <form action="" title='Formulario de nuevo video'
            onSubmit={submitForm}
        >

            <InputText
                required
                label="Título"
                value={title}
                placeholder="Ingresar nombre"
                setValue={setTitle}
            />
            <Select
                required
                label="Categoría"
                value={category}
                setValue={setCategory}
                category={category}
            />
            <InputText
                required
                label="Imagen"
                value={img}
                placeholder="Ingresa una URL valida"
                setValue={setImg}
            />
            <InputText
		required
                label="Video"
                value={video}
		placeholder="Ingresa el enlace del video"
                setValue={setVideo}
            />
            <InputDesc
                required
                label="Descripción"
                value={description}
                placeholder="¿de que trata este video?"
                setValue={setDescription}

            />
            <ButtonForm className='button'

            />
        </form>
    </section>

}

export default Form;
