import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu'

const menuLinks = [{id: "home", to: "/", text: "Download"}, {id: "about", to: "/info", text: "Info"}]
const menuLinksMapping = menuLinks.map(link => {
    return <NavLink id={link.id} to={link.to}>{link.text}</NavLink>
})
const BurgerMenu = (props) => {
    return <Menu>
        {menuLinksMapping}
    </Menu>
}
const Header = (props) => {
    return <header className={s.header}>
        <div className={s.mobileMenu}><BurgerMenu/></div>
        <div className={s.desktopMenu}> {menuLinksMapping}</div>
    </header>
}

export default Header;