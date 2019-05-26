import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../stylesheets/Home.scss';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.arrList && this.props.arrList.length ?
                    <React.Fragment>
                        <h1>Personajes de <img className="logo_header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png" alt="logo"></img></h1>
                        <Filters getInput={this.props.getInput} getReset={this.props.getReset}/>
                        <CharacterList arrList={this.props.arrList} inputValue={this.props.inputValue} />
                        <img className="logo_footer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png" alt="logo"></img>
                    </React.Fragment>
                    : <p>Cargando datos</p>
                }
            </React.Fragment>

        )
    }
}

export default Home;