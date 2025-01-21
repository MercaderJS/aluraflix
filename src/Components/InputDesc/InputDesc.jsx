import './InputDesc.css'

function InputDesc(props) {
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
        console.log(manejarCambio);
        
    }

    return (
        <div className='input__desc--container'>
            <label>{props.titulo}</label>
            <textarea
                type="text"
                className='input__desc'
                placeholder={props.placeholder}
                required={props.required}
                onChange={manejarCambio}
            />
        </div>
    )
}
export default InputDesc