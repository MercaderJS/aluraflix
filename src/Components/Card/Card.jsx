import './Card.css'
import ButonsCard from '../ButonsCard/ButonsCard'
import { useState } from 'react'

function Card(props) {
    const { cards, eliminarCard } = props
    const [play, setPlay] = useState(true);
    const isPlay = () => setPlay(!play);


    return (
            <article className='card'>
                {/* {play ? (
                    <img src={`${cards.imagen}`}
                        alt="portada"
                        className='iframe'
                        onClick={isPlay}
                    />
                ) : (
                    <iframe src={`${cards.video}`}
                        className='iframe'
                    >
                    </iframe>
                )
                } */}

                <ButonsCard 
                    eliminarCard={eliminarCard}
                    cards={cards}
                />
            </article>
    )
}

export default Card