import React from "react";

export default class ContactDetail extends React.Component {
    render() {
        const details = (
            <div>
                <p>{this.props.contactData.name}</p>
                <p>{this.props.contactData.number}</p>
            </div>
        );
        const blank = (<div>Not selected</div>);
        return (
            <div>
                {this.props.isSelected ? details : blank}
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