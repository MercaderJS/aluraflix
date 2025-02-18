import './Select.css'

function Select(props) {

    const categories = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    const change = (e) => {
        console.log("cambio", e.target.value)
        props.setValue(e.target.value)
    }

    return (
        <div className='select__container'>
            <label>{props.label}</label>
            <select value={props.value} onChange={change}>
                <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
                {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </select>
        </div>
    )
}

export default Select
