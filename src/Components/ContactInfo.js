import React from 'react';

export default class ContactInfo extends React.Component {
    render() {
        return (
            <div>{this.props.value.number} {this.props.value.name}</div>
        );
    };
};