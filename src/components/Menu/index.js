import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button';

// import ButtonLink from './components/ButtonLink'
 
function Menu (){
    return (
        <nav className="Menu">
            <Link className="" to="/">
            <img className="Logo" src={Logo}  alt="esportlix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;