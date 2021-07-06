import React from 'react';

export default class Control extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onSetColor}>Randomize Background</button>
            </div>
        );
    }
}