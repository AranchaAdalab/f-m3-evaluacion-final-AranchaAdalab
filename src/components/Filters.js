import React from 'react';
import '../stylesheets/Filters.scss';
import PropTypes from 'prop-types';

class Filters extends React.Component {
    render() {
        const { getInput, getSelect, getBloodValue } = this.props;
        return (
            <React.Fragment>
                <div className="filters_container">
                    <div className="input_container">
                        <div className="label_container">
                            <label className="label_input" htmlFor="inputPotter">¿A quién buscas?</label>
                            <i className="fa fa-bolt"></i>
                        </div>
                        <input name="inputPotter" className="input" type="text" onChange={getInput} />
                    </div>
                    <div className="input_container">
                        <label className="label_input" htmlFor="house_select">Casa</label>
                        <select className="input" id="house_select" name="house_select" onChange={getSelect}>
                            <option value="">Todas</option>
                            <option value="Gryffindor">Gryffindor</option>
                            <option value="Hufflepuff">Hufflepuff</option>
                            <option value="Ravenclaw">Ravenclaw</option>
                            <option value="Slytherin">Slytherin</option>
                            <option value="Ninguna">Ninguna</option>
                        </select>
                    </div>
                    <div className="input_container">
                        <label className="label_input" htmlFor="house_select">Ancestry</label>
                        <select className="input" id="house_select" name="house_select" onChange={getBloodValue}>
                            <option value="">Todos</option>
                            <option value="pure-blood">Pure-blood</option>
                            <option value="half-blood">Half-blood</option>
                            <option value="muggleborn">Muggleborn</option>
                        </select>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Filters.propTypes = {
    getInput: PropTypes.func,
    getSelect: PropTypes.func,
    getBloodValue: PropTypes.func
};

export default Filters;