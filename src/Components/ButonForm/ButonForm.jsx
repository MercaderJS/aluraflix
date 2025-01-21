import './ButonForm.css'

function ButtonForm(props) {
    const { evitarEvento } = props;

    return (<div className="buttons">
        <button
            className="guardar__button"
            type='submit'

        >
            Guardar
        </button>
        
        <button
            className="limpiar__button"
            type='reset'
        >
            Limpiar

        </button>
    </div>)
}

export default ButtonForm