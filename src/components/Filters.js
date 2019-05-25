import React from 'react';
import '../stylesheets/Filters.scss';

class Filters extends React.Component {
    render() {
        const {getInput} = this.props;
        return (
            <div className="input_container">
                <label className="label_input" htmlFor="inputPotter">Busca por nombre <i class="fa fa-bolt"></i></label>
                <input name="inputPotter" className="input" type="text" onChange={getInput}/>
            </div>
        )
    }
}

export default Filters;