import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';

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
                        <img className="character_image" src={potterPrint.image} alt="" />
                        <div className="details">
                            <h2 className="character_name">{potterPrint.name}</h2>
                            {house !== '' ? <p className="character_house">Casa: {house}</p> : ''}
                            {birth !== '' ? <p className="character_birth">Nacimiento: {birth}</p> : ''}
                            {patronus !== '' ? <p className="character_patronus">Patronus: {patronus}</p> : ''}
                            <p className="character_alive">Estado: {potterPrint.alive === true ? 'VIVO' : 'MUERTO'}</p>
                        </div>
                    </div>
                    : <p>Cargando datos</p>}
                <Link onClick={getReset} to="/" className="back">Volver al listado de personajes</Link>
            </React.Fragment>
        )
    }
}

export default CharacterCard;