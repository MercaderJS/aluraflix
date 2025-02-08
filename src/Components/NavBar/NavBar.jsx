import { useState } from "react";
import "./NavBar.css";
import Button from '../Button/Button'

function NavBar(props) {
    const { buttons } = props;
    const BotonHome = () => window.location.href = '/';

    return (
        <nav className="nav__container">
            <img src="img/image 1.png" alt="logo aluraflix" />

            <div className="button__container">
                <Button
                    buttonRole="home__button"
                    action={buttons.buttonHome.action}
                    text={buttons.buttonHome.text}
                />
                <Button
                    buttonRole="new__video--button"
                    action={buttons.buttonNewVideo.action}
                    text={buttons.buttonNewVideo.text}
                />
            </div>

        </nav>
    )
}


export default NavBar