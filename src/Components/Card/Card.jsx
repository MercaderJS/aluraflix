import './Card.css'
import Button from '../Button/Button'
import { useState } from 'react'

function Card(props) {
    const { video, buttonEdit, buttonDelete, title, key, card } = props;
    const [play, setPlay] = useState(true);
    const isPlay = () => setPlay(!play);


    return (
            <article className='card'>
                
                <iframe src={video} key={key}></iframe>
                {title}
                <Button
                    action={buttonEdit}
                    text={"Edit"}
                />
                <Button
                    action={buttonDelete.action}
                    text={"Delete"}
                    title={title}
                />
            </article>
    )
}

export default Card