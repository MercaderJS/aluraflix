import './Select.css'

function Select(props) {

    const categorias = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='select__container'>
            <label>{props.titulo}</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
                {categorias.map((categoria, indice) => <option key={indice} value={categoria}>{categoria}</option>)}
            </select>
        </div>
    )
}

export default Select