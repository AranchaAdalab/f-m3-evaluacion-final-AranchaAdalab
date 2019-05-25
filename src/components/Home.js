import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.arrList && this.props.arrList.length ?
                    <React.Fragment>
                        <Filters getInput={this.props.getInput} />
                        <CharacterList arrList={this.props.arrList} inputValue={this.props.inputValue} />
                    </React.Fragment>
                    : <p>Cargando datos</p>
                }
            </React.Fragment>

        )
    }
}

export default Home;