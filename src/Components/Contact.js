import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contatctData: [
                { number: '010-0000-0000', name: 'Albert' },
                { number: '010-0000-0001', name: 'Betty' },
                { number: '010-0000-0002', name: 'Charlie' },
                { number: '010-0000-0003', name: 'David' },
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }
    handleClick(key) {
        this.setState({
            selectedKey: key
        });
        console.log('A');
    }

    render() {
        const convertComponentToMap = (data) => {
            data.sort();
            data = data.filter((contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
            });
            return data.map((contact, i) => {
                return (<ContactInfo value={contact} key={i} onClick={() => this.handleClick(i)} />);
            });
        };
        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name='keyword'
                    placeholder='Search'
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                {convertComponentToMap(this.state.contatctData)}
            </div>
        );
    }
};