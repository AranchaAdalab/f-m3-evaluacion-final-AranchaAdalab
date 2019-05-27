import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Hufflepuff from '../images/hufflepuff.png';
import Gryffindor from '../images/Gryffindor.png';
import Slytherin from '../images/Slytherin.png';
import Ravenclaw from '../images/Ravenclaw.png';
import '../stylesheets/CharacterCard.scss';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
    render() {
        const { arrList, getReset } = this.props;
        const potterId = this.props.match.params.id;
        const potterPrint = arrList.length && arrList.find(item => item.id === potterId)
        const image = potterPrint.image;
        const name = potterPrint.name;
        const house = potterPrint.house;
        const birth = potterPrint.yearOfBirth;
        const patronus = potterPrint.patronus;
        const alive = potterPrint.alive;
        return (
            <React.Fragment>
                <Header getReset={getReset}/>
                <div className="character_and_link">
                    {potterPrint ?
                        <div className="character_detail">
                            <img className={`character_detail_image ${alive === false ? 'death' : ''}`} src={image} alt={name} />
                            <div className="details">
                                <h2 className="character_detail_name">{name}</h2>
                                {house !== '' ? <p className="character_detail_house">Casa
                                {house === 'Hufflepuff' ? <img className="crest" src={Hufflepuff} alt="" /> : ''}
                                    {house === 'Gryffindor' ? <img className="crest" src={Gryffindor} alt="" /> : ''}
                                    {house === 'Slytherin' ? <img className="crest" src={Slytherin} alt="" /> : ''}
                                    {house === 'Ravenclaw' ? <img className="crest" src={Ravenclaw} alt="" /> : ''}
                                </p> : ''}
                                {birth !== '' ? <p className="character_detail_birth">Nacimiento: {birth}</p> : ''}
                                {patronus !== '' ? <p className="character_detail_patronus">Patronus: {patronus}</p> : ''}
                                <p className="character_detail_alive">Estado {alive === true ? <i className="fas fa-book"></i> : <i className="fas fa-book-dead"></i>}</p>
                            </div>
                        </div>
                        : <p>Cargando datos</p>
                    }
                    <div className="back_link">
                        <Link to="/" className="back">Volver a mi búsqueda</Link>
                        <Link onClick={getReset} to="/" className="back">Volver al listado completo de personajes</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

CharacterCard.propTypes = {
    arrList: PropTypes.array,
    getReset: PropTypes.func,
    potterId: PropTypes.number
};

export default CharacterCard;