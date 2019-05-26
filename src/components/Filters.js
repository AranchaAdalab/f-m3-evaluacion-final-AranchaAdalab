import React from 'react';
import '../stylesheets/Filters.scss';
import PropTypes from 'prop-types';

class Filters extends React.Component {
    render() {
        const { getInput } = this.props;
        return (
            <React.Fragment>
                <div className="input_container">
                    <label className="label_input" htmlFor="inputPotter">¿A quién buscas? <i class="fa fa-bolt"></i></label>
                    <input name="inputPotter" className="input" type="text" onChange={getInput} />
                </div>
            </React.Fragment>
        )
    }
}

Filters.propTypes = {
    getInput: PropTypes.func,
};

export default Filters;