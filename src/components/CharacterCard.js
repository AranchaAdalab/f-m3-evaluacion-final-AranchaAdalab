import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';
import Hufflepuff from '../images/hufflepuff.png';
import Gryffindor from '../images/Gryffindor.png';
import Slytherin from '../images/Slytherin.png';
import Ravenclaw from '../images/Ravenclaw.png';

class CharacterCard extends React.Component {
    render() {
        const { arrList, getReset } = this.props;
        const potterId = this.props.match.params.id;
        const potterPrint = arrList.length && arrList.find(item => item.id === potterId)
        const patronus = potterPrint.patronus;
        const birth = potterPrint.yearOfBirth;
        const house = potterPrint.house;
        const alive = potterPrint.alive;
        const name = potterPrint.name;
        return (
            <div className="character_and_link">
                {potterPrint ?
                    <div className="character_detail">
                        <img className={`character_detail_image ${alive === false ? 'death' : ''}`} src={potterPrint.image} alt={name} />
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
                            <p className="character_detail_alive">Estado {alive === true ? <i class="fas fa-book"></i> : <i class="fas fa-book-dead"></i>}</p>
                        </div>
                    </div>
                    : <p>Cargando datos</p>
                }
                <Link to="/" className="back">Volver a mi búsqueda</Link>
                <Link onClick={getReset} to="/" className="back">Volver al listado completo de personajes</Link>
            </div>
        )
    }
}

export default CharacterCard;