import React from 'react';
import '../stylesheets/CharacterList.scss';
import { Link } from 'react-router-dom';
import Hat from '../images/hat.png';

class CharacterList extends React.Component {

    render() {
        const { arrList, inputValue } = this.props;
        return (
            <React.Fragment>
                <ul className="character_list">
                    {arrList
                        .filter(character => character.name.toLowerCase().includes(inputValue.toLowerCase()))
                        .map(character => {
                            return (
                                <li className="character" key={character.id}>
                                    <div className="character_image_container">
                                        <img className="character_image" src={character.image} alt={character.name} />
                                    </div>
                                    <h2 className="character_name">{character.name}</h2>
                                    <p className="character_house">{character.house}</p>
                                    <Link to={`/characters/${character.id}`}><img className="hat" src={Hat} alt=""/></Link>
                                </li>
                            )
                        })}
                </ul>
            </React.Fragment>
        )
    }
}

export default CharacterList;