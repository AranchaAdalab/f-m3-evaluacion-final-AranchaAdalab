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
      inputValue: ''
    }
    this.getCharacters = this.getCharacters.bind(this);
    this.getInput = this.getInput.bind(this);
    this.getReset = this.getReset.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchPotter()
      .then(data => {
        const newArr = data.map((character, index) => {
          const patronus = character.patronus.charAt(0).toUpperCase() + character.patronus.slice(1)
          return { ...character, id: `hogwartsid-${index}`, patronus: patronus };
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

  getReset() {
    this.setState({
      inputValue: ''
    })
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home
            arrList={this.state.arrList}
            inputValue={this.state.inputValue}
            getInput={this.getInput}
          />
          } />
          <Route path="/characters/:id" render={routerProps => (
            <CharacterCard match={routerProps.match} arrList={this.state.arrList} getReset={this.getReset} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
