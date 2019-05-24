import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Filters getInput={this.props.getInput} />
                <CharacterList arrList={this.props.arrList} inputValue={this.props.inputValue} />
            </React.Fragment>

        )
    }
}

export default Home;