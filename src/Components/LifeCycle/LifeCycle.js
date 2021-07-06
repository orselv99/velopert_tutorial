import React from 'react';

export default class LifeCycle extends React.Component {
    constructor(props) {
        // component 가 처음 만들어질 때 실행된다
        // 기본 state 를 설정
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
    componentDidMount() {
        // 첫 rendering 을 마치고 실행됨
        // 이 안에서 다른 javascript framework 연동 및 setTimeout, setInterval 및 ajax 사용
        // DOM 처리 가능
        console.log('componentDidMount');
    }
    shouldComponentUpdate(prevProps, nextProps) {
        // props/state 가 변경되었을 때 re-rendering 을 할지말지 결정
        // 실제로 사용 할 때는 필요한 비교를 하고 값을 반환해야 함 (return nextProps.id !=== this.props.id)
        // JSON.stringify 를 사용하여 여러 field 를 편하게 비교
        console.log(`shouldComponentUpdate prev:${JSON.stringify(prevProps)} next:${JSON.stringify(nextProps)}`);
        console.log(`number: ${nextProps.number} state:${this.state.number}`);

        // false 가 리턴되면 업데이트 안됨 (componentDidUpdate)
        // setState 는 비동기라서 바로 반영안되고 이전 값으로 확인됨
        return (nextProps.number === (this.state.number + 1));
    }
    componentDidUpdate() {
        // component 가 re-rendering 마치면 실행됨
        // 절대 setState 호출하지 말 것 (무한loop 빠짐)
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        // component 가 DOM 에서 사라진 후 실행됨
        console.log('componentWillUnmount');
    }

    //// unsafe (https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
    // componentWillMount() {
    //     // component 가 DOM 위에 만들어지기 전에 실행됨
    //     // 따라서, 이 함수에서는 DOM 처리를 할 수 없음
    //     console.log('componentWillMount');
    // }
    // componentWillReceiveProps() {
    //     // props 를 받을때 실행됨
    //     // props 에 따라 state 를 업데이트 할 때 사용하면 유용
    //     // setState 호출가능
    //     console.log('componentWillReceiveProps');
    // }
    // componentWillUpdate() {
    //     // component 업데이트 전에 실행
    //     // 절대 setState 호출하지 말 것 (무한loop 빠짐)
    //     console.log('componentWillUpdate');
    // }


    render() {
        return (
            <div>
                <p>
                    <button onClick={() => this._show()}>Show Card</button>
                    <button onClick={() => this._increase()}>Increase Number</button>
                    <button>Unmount Card</button>
                </p>
                <p>
                    Number: {this.state.number}
                </p>
            </div >
        );
    }
}