import React from 'react';
import Hogwarts from '../images/Hogwartscrest.png';
import Hat from '../images/hat.png';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

class Header extends React.Component {
    render() {
        const { getReset } = this.props;
        return (
            <header className="header">
                <Link onClick={getReset} to="/" className="back"><img className="crest_school" src={Hogwarts} alt="" /></Link>
                <div className="title_and_hat">
                    <h1>Personajes de <img className="logo_header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png" alt="logo"></img></h1>
                    <div className="hat_container">
                        <img className="hat_header" src={Hat} alt="" />
                        <p className="mas_info">¡Búscame en cada personaje y te contaré más cosas sobre él!</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header; 