import { useState } from "react"
import "./Header.css"
import Button from "../Button/Button"
import Card from "../Card/Card";
import Form from "../Form/Form";


function Header(props) {
    const { buttons } = props;

    return (
        <header className="header">
            <div className="texto__header">
                <h1>
                    Frontend
                </h1>
                <h2>Challenge React</h2>
                <p>
                    Este challenge es una forma de aprendizaje.
                    Es un mecanismo donde podrás comprometerte en la resolución de un
                    problema para poder aplicar
                    todos los conocimientos adquiridos en la formación React.
                </p>
                <Button
                    text={buttons.buttonHeader.text}
                    buttonRole="button__header"
                    action={buttons.buttonHeader.action}
                />

                <Card
                    text={buttons.buttonEditCard}
                    buttonRole="button__header"
                    action={buttons}
                />

            </div>
        </header>
    )

}

export default Header