import './InputDesc.css'

function InputDesc(props) {
    const { label,setValue, placeholder, value } = props;
    const change = (e) => {
        setValue(e.target.value)
        console.log(value);
        
    }

    return (
        <div className='input__desc--container'>
            <label>{label}</label>
            <textarea
                required
                type="text"
                className='input__desc'
                placeholder={placeholder}
                onChange={change}
                
            />
        </div>
    )
}
export default InputDesc