import React from 'react';

class Filters extends React.Component {
    render() {
        const {getInput} = this.props;
        return (
            <React.Fragment>
                <label htmlFor="inputPotter">Busca por nombre</label>
                <input name="inputPotter" className="input" type="text" onChange={getInput}/>
            </React.Fragment>
        )
    }
}

export default Filters;