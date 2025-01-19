import './Select.css'

function Select() {
    return (
        <div className='select__container'>
            <label>Categoria</label>
            <select name="Selaccionar Equipo" id="">
                <option value="Front End">Front End</option>
                <option value="Backend">Backend</option>
                <option value="Innovacion y gestion">Innovacion y gestion</option>
            </select>
        </div>
    )
}

export default Select