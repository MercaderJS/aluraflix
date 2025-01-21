import './ButonsCard.css'

function ButonsCard(props) {
    const { eliminarCard, cards } = props
    return (
        <div className='button__container'>
            <button className='button__elimnar' onClick={() => eliminarCard(cards.titulo)}>
            
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