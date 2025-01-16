import { useState } from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="nav__container">
            <img src="img/image 1.png" alt="logo aluraflix" />

            <div className="button__container">
            <button className="home__button">Home</button>
            <button className="new__video--button">Nuevo Video</button>
            </div>

        </nav>
    )
}


export default NavBar