import './NewVideoPage.css'
import Form from '../Form/Form'


function NewVideoPage(props) {
    const { anadirCards, categorias } = props

    return (
        <main className='main'>
            <div className='titulo'>
                <h1>NUEVO VIDEO</h1>
                <h4>Complete el formulario para crear una nueva tarjeta de video</h4>
                </div>
            <Form 
                
                anadirCards={anadirCards}
                categorias={categorias}
            />
        </main>
    )

}

export default NewVideoPage