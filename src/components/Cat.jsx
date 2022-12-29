import React from 'react';

class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sleeping: true };//estado inicial de sleeping
    }
    render() {
        return (
            <div>
                <p>
                    {`El gato está ${this.state.sleeping ? 'durmiendo' : 'comiendo'}`}
                </p>{/*si es true pasará a ser false al presionar el botón*/}
                <button onClick={() => this.setState({ sleeping: false })}>
                    ¡Despierta!
                </button>
            </div>
        );
    }
}
export default Cat;