import React from 'react';
import '../stylesheets/Filters.scss';
import Hogwarts from '../images/Hogwartscrest.png';
import { Link } from 'react-router-dom';

class Filters extends React.Component {
    render() {
        const {getInput, getReset} = this.props;
        return (
            <div className="input_container">
                <label className="label_input" htmlFor="inputPotter">¿A quién buscas? <i class="fa fa-bolt"></i></label>
                <input name="inputPotter" className="input" type="text" onChange={getInput}/>
                <Link onClick={getReset} to="/" className="back"><img className="crest_school" src={Hogwarts} alt=""/></Link>
            </div>
        )
    }
}

export default Filters;