import React from 'react';
import Home from './components/Home';
import CharacterCard from './components/CharacterCard';
import { fetchPotter } from './components/Petition';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrList: [],
      inputValue: '',
      selectValue: ''
    }
    this.getCharacters = this.getCharacters.bind(this);
    this.getInput = this.getInput.bind(this);
    this.getReset = this.getReset.bind(this);
    this.getSelect = this.getSelect.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchPotter()
      .then(data => {
        const newArr = data.map((character, index) => {
          const patronus = character.patronus.charAt(0).toUpperCase() + character.patronus.slice(1)
          const house = character.house === '' ? 'Ninguna' : character.house
          return { ...character, id: `hogwartsid-${index}`, patronus: patronus, house: house };
        });
        this.setState({
          arrList: newArr,
        })
      });
  }

  getInput(event) {
    const guilty = event.currentTarget.value;
    this.setState({
      inputValue: guilty
    })
  }

  getSelect(event) {
    const guilty = event.currentTarget.value;
    this.setState({
      selectValue: guilty
    })
  }

  getReset() {
    this.setState({
      inputValue: '',
      selectValue: ''
    })
  }

  render() {
    const { arrList, inputValue, selectValue } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home
            arrList={arrList}
            inputValue={inputValue}
            selectValue={selectValue}
            getInput={this.getInput}
            getReset={this.getReset}
            getSelect={this.getSelect}
          />
          } />
          <Route path="/characters/:id" render={routerProps => (
            <CharacterCard match={routerProps.match} arrList={arrList} getReset={this.getReset} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
