import React from 'react';
import Home from './components/Home';
import CharacterCard from './components/CharacterCard';
import { fetchPotter } from './components/Petition';
import {Route, Switch} from 'react-router-dom';
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
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchPotter()
      .then(data => {
        const newArr = data.map((character, index) => {
          return {...character, id: `hogwartsid-${index}`};
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

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" render={() => <Home
              arrList={this.state.arrList}
              inputValue={this.state.inputValue}
              getInput={this.getInput}
            />
            } />
            <Route path="/characterCard/:id" render={routerProps => (
                <CharacterCard match={routerProps.match} arrList={this.state.arrList} />
              )} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
