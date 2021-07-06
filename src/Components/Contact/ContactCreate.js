import React from 'react';

export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        // 여러 이벤트를 하나의 메서드에서 같이 처리하기 위해 아래와 같이 빈 객체를 생성
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleClick() {
        const contact = {
            name: this.state.name,
            number: this.state.number,
        }
        this.props.onClick(contact);

        // 컨트롤의 value 초기화
        this.setState({
            name: '',
            number: '',
        });
    }
    handleKeyPress(e) {
        if (e.charCode === 13) {
            // enter 이벤트 추가
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='name'
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='number'
                        value={this.state.number}
                        placeholder='number'
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        );
    }
}

// ContactCreate.propTypes = {
//     onCreate: React.PropTypes.func
// }
// ContactCreate.defaultProps = {
//     onCreate: () => {
//         console.log('Does not create onCreate. ');
//     }
// }