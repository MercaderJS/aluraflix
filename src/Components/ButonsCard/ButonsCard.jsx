import './ButonsCard.css'

function ButonsCard() {
    return (
        <div className='button__container'>
            <button className='button__elimnar'>
                <img
                    src="/images/vector.svg"
                    alt="icono borrar"
                    height="18"
                />
                Eliminar

            </button>

            <button
                className='button__editar'

            >
                <img
                    src="/images/vector2.svg"
                    alt="icono borrar"
                    height="18"
                />
                Editar
            </button>

        </div>
    )
}

export default ButonsCard