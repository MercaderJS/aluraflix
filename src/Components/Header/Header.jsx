import { useState } from "react"
import "./Header.css"
import Button from "../Button/Button"
import Card from "../Card/Card";

function Header(props) {
    const { buttons, cardHeader } = props;

    return (
        <header className="header">
            <div className="texto__header">
                <h1>
                    Frontend
                </h1>
                <h2>Challenge React</h2>
                <p>
                    Este challenge es una forma de aprendizaje.
                    Es un mecanismo donde podrás comprometerte en la resolución
                    de un problema para poder aplicar
                    todos los conocimientos adquiridos en la formación React.
                </p>
                <Button
                    text={buttons.buttonHeader.text}
                    buttonRole="button__header"
                    action={buttons.buttonHeader.action}
                />
                {
                    cardHeader.map((card) =>{
                        return (<Card
                            key={card.title}
                            title={card.title}
                            category={card.category}
                            img={card.img}
                            video={card.video}
                            description={card.description}
                            buttons={buttons}
                        />)
                    })
                }
            </div>
        </header>
    )

}

export default Header