import './Input.css'

function Input(props) {
    const { titulo, placeholder } = props;
    console.log(props);

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
        console.log(manejarCambio);
        
    }

    return (
        <div className='input__area'>
            <label>{titulo}</label>
            <input
                type="text"
                className='input'
                placeholder={placeholder}
                onChange={manejarCambio}
                value={props.valor}
                required

            />
        </div>
    )
}

export default Input