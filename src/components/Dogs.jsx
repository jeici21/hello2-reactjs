import React from 'react';
import Dog from './Dog';

class Dogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timeToEat: false };//declarando estado inicial de timeToEat
    }
    render() {
        return (
            <div>
                <Dog timeToEat={this.state.timeToEat} />
                <button onClick={() => this.setState({ timeToEat: true })}>{/*cambiando estado inicial de timeToEat*/}
                    ¡Hora de comer!
                </button>
            </div>
        );
    }
}

export default Dogs;