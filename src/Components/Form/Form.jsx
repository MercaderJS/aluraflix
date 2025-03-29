import { useState } from 'react';
import './Form.css'
import { v7 as uid } from 'uuid';
import Select from '../Select/Select';
import Input from '../Input/Input';
import InputDesc from '../InputDesc/InputDesc';
import Button from '../Button/Button';


function Form(props) {

    const { buttons, funcChangeContext } = props;

    // evita que se recargue la pagina al enviar el formulario
    const submitForm = (e) => {
        e.preventDefault()
        const id = uid();

        let datosEnviar = {
            id,
            title,
            category,
            img,
            video,
            description
        }
        console.log(datosEnviar);

        funcChangeContext().stateFunc();
        funcChangeContext().funcData(datosEnviar);

    }


    // useState para cada campo del formulario
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [img, setImg] = useState("")
    const [video, setVideo] = useState("")
    const [description, setDescription] = useState("")

    return <section className={funcChangeContext().selector}>
        <h2>
            Crear Tarjeta
        </h2>
        <form 
            action="" 
            title='Formulario de nuevo video'
            onSubmit={submitForm}
        >

            <Input
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
            />
            <Input
                required
                label="Imagen"
                value={img}
                placeholder="Ingresa una URL valida"
                setValue={setImg}
            />
            <Input
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
            <Button
                class={buttons.buttonFormSave.class}
                text={buttons.buttonFormSave.text}
                type={buttons.buttonFormSave.type}
                action={buttons.buttonFormSave.action}
            />
            <Button
                buttonrole={'button__clean'}
                text={buttons.buttonFormClean.text}
                type={buttons.buttonFormClean.type}
                
            />

        </form>
    </section>

}

export default Form;
