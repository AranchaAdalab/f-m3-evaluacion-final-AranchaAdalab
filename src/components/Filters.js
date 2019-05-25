import React from 'react';
import '../stylesheets/Filters.scss';
import Hogwarts from '../images/Hogwartscrest.png';

class Filters extends React.Component {
    render() {
        const {getInput} = this.props;
        return (
            <div className="input_container">
                <label className="label_input" htmlFor="inputPotter">¿A quién buscas? <i class="fa fa-bolt"></i></label>
                <input name="inputPotter" className="input" type="text" onChange={getInput}/>
                <img className="crest" src={Hogwarts} alt=""/>
            </div>
        )
    }
}

export default Filters;