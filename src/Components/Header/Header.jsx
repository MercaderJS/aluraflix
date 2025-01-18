import { useState } from "react"
import "./Header.css"


function Header () {
    return(
        <header className="header">

        <div className="texto__header">
            <h1>Challenge React</h1>
            <p>
                Este challenge es una forma de aprendizaje. 
                Es un mecanismo donde podrás comprometerte en la resolución de un 
                problema para poder aplicar
                todos los conocimientos adquiridos en la formación React.
            </p>
        </div>
        </header>
    )

}

export default Header