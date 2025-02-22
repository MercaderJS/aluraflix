import { replace } from 'react-router';
import './Select.css'

function Select(props) {
    const { label, value, setValue } = props;
    const categories = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    const change = (e) => {
        setValue(e.target.value)
        // console.log(value);
    }

    return (
        <div className='select__container'>
            <label>{label}</label>
            <select value={value} onChange={change}>

                <option
                    defaultValue="Seleccionar categoría"
                    selected
                    hidden
                >
                    Seleccionar categoría
                </option>
                {categories.map((category, index)=> 
                <option key={index} value={category}>
                    {category}
                </option>)}

            </select>
        </div>
    )
}

export default Select
replace();