import './CardTeam.css'
import ButonsCard from '../ButonsCard/ButonsCard'
import { useState } from 'react'

function CardTeam(props) {
    const { cards } = props
    const [play, setPlay] = useState(true);
    const isPlay = () => setPlay(false);


    return (
        <section className='card' >

            <article >
                {play ? (
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
                }

                <ButonsCard />
            </article>

        </section>
    )
}

export default CardTeam