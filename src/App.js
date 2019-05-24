import React from 'react';
import {fetchPotter} from './components/Petition';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
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
        this.setState({
          arrList: data,
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
        <Filters getInput={this.getInput}/>
        <CharacterList arrList={this.state.arrList} inputValue={this.state.inputValue}/>
      </div>
    );
  }
}

export default App;
