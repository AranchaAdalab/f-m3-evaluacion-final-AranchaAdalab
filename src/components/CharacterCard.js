import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
    render() {
        const { arrList, getReset } = this.props;
        const potterId = this.props.match.params.id;
        const potterPrint = arrList.find(item => item.id === potterId)
        return (
            <React.Fragment>
                {potterPrint ?
                    <div className="character_detail">
                        <img className="character_image" src={potterPrint.image} alt="" />
                        <h2 className="character_name">{potterPrint.name}</h2>
                        <p className="character_house">Casa: {potterPrint.house}</p>
                        <p className="character_birth">Nacimiento: {potterPrint.yearOfBirth}</p>
                        <p className="patronus">Patronus: {potterPrint.patronus}</p>
                        <p className="alive">Estado: {potterPrint.alive === true ? 'vivo' : 'muerto'}</p>
                    </div>
                    : <p>Cargando</p>}
                <Link onClick={getReset} to="/">Volver al listado de personajes</Link>
            </React.Fragment>
        )
    }
}

export default CharacterCard;