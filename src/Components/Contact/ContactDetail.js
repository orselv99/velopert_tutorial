import React from "react";

export default class ContactDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            number: '',
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle(isSelected) {
        // 아이템 선택된 경우에만 계속 처리
        if (isSelected === false) {
            console.log(`selected nothing.`);
            return;
        }

        if (this.state.isEdit === false) {
            // Edit
            this.setState({
                name: this.props.contactData.name,
                number: this.props.contactData.number,
            });

        }
        else {
            // OK
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit,
        });

        // 주의** this.setState 가 비동기이기 때문에 다른 값을 log 로 출력함
        console.log(`isEdit:${this.state.isEdit}`);
    }
    handleChange(e) {
        let nextState = {};
        console.log(`name:${e.target.name} val:${e.target.value}`);
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleEdit() {
        this.props.onEdit(this.state.name, this.state.number);
    }

    render() {
        const details = (
            <div>
                <p>{this.props.contactData.name}</p>
                <p>{this.props.contactData.number}</p>
            </div>
        );

        const edit = (
            <div>
                <p>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='name'
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type='text'
                        name='number'
                        value={this.state.number}
                        placeholder='number'
                        onChange={this.handleChange}
                    />
                </p>
            </div>
        );
        const view = this.state.isEdit ? edit : details;

        const blank = (<div>Not selected</div>);
        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={() => this.handleToggle(this.props.isSelected)}>
                        {this.state.isEdit ? 'OK' : 'Edit'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}

ContactDetail.defaultProps = {
    contactData: {
        name: '',
        number: '',
    }
}