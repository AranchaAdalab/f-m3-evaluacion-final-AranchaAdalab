import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';
import Hufflepuff from '../images/hufflepuff.png';

class CharacterCard extends React.Component {
    render() {
        const { arrList, getReset } = this.props;
        const potterId = this.props.match.params.id;
        const potterPrint = arrList.length && arrList.find(item => item.id === potterId)
        const patronus = potterPrint.patronus;
        const birth = potterPrint.yearOfBirth;
        const house = potterPrint.house;
        return (
            <React.Fragment>
                {potterPrint ?
                    <div className="character_detail">
                        <img className="character_detail_image" src={potterPrint.image} alt="" />
                        <div className="details">
                            <h2 className="character_detail_name">{potterPrint.name}</h2>
                {house !== '' ? <p className="character_detail_house">Casa {house === 'Hufflepuff' ? <img className="chest" src={Hufflepuff} alt="" /> : ''} {house === 'Gryffindor' ? 'Gryffindor' : ''}</p> : ''}
                            {birth !== '' ? <p className="character_detail_birth">Nacimiento: {birth}</p> : ''}
                            {patronus !== '' ? <p className="character_detail_patronus">Patronus: {patronus}</p> : ''}
                            <p className="character_detail_alive">Estado: {potterPrint.alive === true ? 'VIVO' : 'MUERTO'}</p>
                        </div>
                    </div>
                    : <p>Cargando datos</p>}
                <Link onClick={getReset} to="/" className="back">Volver al listado de personajes</Link>
            </React.Fragment>
        )
    }
}

export default CharacterCard;