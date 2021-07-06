import React from 'react';

export default class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            isShow: false,
        };
        console.log('constructor');
    }

    // test
    _increase() {
        this.setState({
            number: this.state.number + 1,
        });
    }
    _show() {
        this.setState({
            isShow: !this.state.isShow,
        });
    }

    // lifecycle apis
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }
    // componentDidMount() {
    //     console.log('componentDidMount');
    // }
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps');
    // }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
    }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }



    render() {
        return (
            <div>
                LifeCycle
            </div>
        );
    }
}