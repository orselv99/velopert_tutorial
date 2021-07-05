import React from 'react';
import ReactDOM from 'react-dom';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            value: this.state.value + 1,
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.onClick}>press me!</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Counter />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));