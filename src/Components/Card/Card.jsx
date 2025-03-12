import './Card.css'
import Button from '../Button/Button'
import { useState } from 'react'

function Card(props) {
    const { video, buttons, title } = props;
    const [play, setPlay] = useState(true);
    const isPlay = () => setPlay(!play);


    return (
            <article className='card'>
                
                <iframe src={video} >{title}</iframe>

                <Button
                    action={buttons.buttonEditHeader.action}
                    text={buttons.buttonEditHeader.text}

                />
            </article>
    )
}

export default Card