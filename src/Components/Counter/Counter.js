import React from 'react';

var numbers = [1, 2, 3, 4, 5];
// var processed = numbers.map(number => {
//     return number * number;
// });

// Counter
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.onClick = this.onClick.bind(this);
    }

    // getNumbers() {
    //     let result = '';
    //     for (let i = 0; i < processed.length; i++) {
    //         result += processed[i] + ', ';
    //     }
    //     return result;
    // }
    onClick() {
        this.setState({
            value: this.state.value + 1,
        });
    }
    render() {
        const convertSummaryToMap = (data) => {
            return data.map((value, i) => {
                return <h3>{value}</h3>
            });
        }
        const convertMultipleToMap = (data) => {
            return data.map((value, i) => {
                return <h3>{value * value}</h3>
            });

        }

        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.onClick}>press me!</button>
                {/* <h3>{this.getNumbers()}</h3> */}
                <div>{convertSummaryToMap(numbers)}</div>
                <div>{convertMultipleToMap(numbers)}</div>
            </div>
        );
    }
};