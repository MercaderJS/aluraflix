import './Card.css'
import Button from '../Button/Button'
import { useState } from 'react'

function Card(props) {
    const { video, buttonEdit, buttonDelete, title, id } = props;
    console.log(id);
    
    const [play, setPlay] = useState(true);
    const isPlay = () => setPlay(!play);


    return (
            <article className='card'>
                
                <iframe src={video}></iframe>
                {title}
                <Button
                    action={buttonEdit.action}
                    text={"Edit"}
                />
                <Button
                    action={buttonDelete.action}
                    text={"Delete"}
                    id={id}
                />
            </article>
    )
}

export default Card