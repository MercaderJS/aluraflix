import './Input.css'

function Input(props) {
    const { label, placeholder, setValue } = props;
    console.log(props);

    const change = (e) => {
        setValue(e.target.value)
        console.log(value);
        
    }


    return (
        <div className='input__area'>
            <label>{label}</label>
            <input
                type="text"
                className='input'
                placeholder={placeholder}
                onChange={change}
                required

            />
        </div>
    )
}

export default Input