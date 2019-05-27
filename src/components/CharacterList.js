import React from 'react';
import { Link } from 'react-router-dom';
import Hat from '../images/hat.png';
import '../stylesheets/CharacterList.scss';
import PropTypes from 'prop-types';

class CharacterList extends React.Component {
    render() {
        const { arrList, inputValue, selectValue } = this.props;
        return (
            <React.Fragment>
                <ul className="character_list">
                    {arrList
                        .filter(character => character.name.toLowerCase().includes(inputValue.toLowerCase()))
                        .filter(character => character.house.includes(selectValue))
                        .map(character => {
                            return (
                                <li className="character" key={character.id}>
                                    <div className="character_image_container">
                                        <img className="character_image" src={character.image} alt={character.name} />
                                    </div>
                                    <h2 className="character_name">{character.name}</h2>
                                    <div className="house_and_hat">
                                        <p className="character_house">{character.house}</p>
                                        <Link to={`/characters/${character.id}`}><img className="hat" src={Hat} alt="" /></Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}

CharacterList.propTypes = {
    arrList: PropTypes.array,
    inputValue: PropTypes.string,
    selectValue: PropTypes.string
};

export default CharacterList;