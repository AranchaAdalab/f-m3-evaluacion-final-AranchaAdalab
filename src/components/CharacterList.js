import React from 'react';
import '../stylesheets/CharacterList.scss';
class CharacterList extends React.Component {

    render() {
        const {arrList, inputValue} = this.props;
        return (
            <React.Fragment>
                <ul className="character_list">
                    {arrList
                    .filter (character => character.name.toLowerCase().includes(inputValue.toLowerCase()))
                    .map(character => {
                        return (
                            <div>
                                <li><img className="character_image" src={character.image} alt="" /></li>
                                <li><h2 className="character_name">{character.name}</h2></li>
                                <li><p className="character_house">{character.house}</p></li>
                            </div>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default CharacterList;