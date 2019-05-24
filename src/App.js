import React from 'react';
import { fetchPotter } from './components/Petition';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrList: []
    }
    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchPotter()
      .then(data => {
        this.setState({
          arrList: data,
        })
      });
  }

  render() {
    const { arrList } = this.state;
    return (
      <div className="App">
        <ul className="character_list">
          {arrList.map(character => {
            return (
              <div>
                <li><img className="character_image" src={character.image} alt=""/></li>
                <li><h2 className="character_name">{character.name}</h2></li>
                <li><p className="character_house">{character.house}</p></li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
