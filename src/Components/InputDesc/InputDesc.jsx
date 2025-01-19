import './InputDesc.css'

function InputDesc(){
    return (
        <div className='input__desc--container'>
            <h3>Descripcion</h3>
            <textarea type="text" className='input__desc'/>
        </div>
    )
}
export default InputDesc