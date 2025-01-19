import './Form.css'
// import Input from '../Input/Input';
// import InputSelect from '../InputSelect/InputSelect';
import ButtonForm from '../ButonForm/ButonForm';
import Select from '../Select/Select';
import InputText from '../InputText/InputText';
import InputDesc from '../InputDesc/InputDesc';

function Form(){
    return (
        <section className='form__container'>
            <h2>
                Crear Tarjeta
            </h2>
            <form action="" title='Hola mundo'>
            <InputText/>
            <InputText/>
            <InputText/>
            <InputText/>
            <InputDesc />
            <Select />
            </form>
            <ButtonForm className='button'/>
        </section>);
        
}


export default Form