import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import ContactCreate from './ContactCreate';

/*
1.
state 의 배열을 기본 js 메서드로 push 하면 배열자체를 변경하기때문에 사용하면 안됨
대신, concat 을 사용 (기존 배열은 그대로 두고 새 배열을 만듬)
this.setState({
    list: this.state.list.concat(newObj)
});

2.
immutability helper (immutable.js) npm install react-addons-update --save
# 원소 추가
this.setState({
    list: update(
        this.state.list, 
        { 
            $push: [newObj, newObj2, ...]   // 하나여도 배열형태로
        }
    );
});

# 원소 제거
this.setState({
    list: update(
        this.state.list, 
        { 
            $splice: [[index, 1], ...]  // 주의! 처음 명령으로 array 에서 원소를 지우면 index 가 변경됨
        }
    );
});

# 원소 제거
this.setState({
    list: update(
        this.state.list, 
        { 
            [index] : {
                field1: { $set: 'value1' },
                field2: { $set: 'value2' },
            }
        }
    );
});

*/
import update from 'react-addons-update';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [
                { number: '010-0000-0000', name: 'Albert' },
                { number: '010-0000-0001', name: 'Betty' },
                { number: '010-0000-0002', name: 'Charlie' },
                { number: '010-0000-0003', name: 'David' },
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    // 사용자 이벤트
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }
    handleClick(key) {
        this.setState({
            selectedKey: key
        });
        console.log(`'${key}' is selected!`);
    }
    handleCreate(contact) {
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $push: [contact],
                }
            ),
        });
    }
    handleEdit(name, number) {
        // if ((name.length > 0) && (number.length > 0)) {
        // }
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        number: { $set: number },
                    },
                }),
        });
    }
    handleRemove() {
        if (this.state.selectedKey < 0) {
            // 선택한 경우에만 삭제
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    // '현재 선택된 키' 부터 하나의 원소제거
                    $splice: [[this.state.selectedKey, 1]],
                }
            ),
        });
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
                {convertComponentToMap(this.state.contactData)}
                <ContactDetail
                    isSelected={this.state.selectedKey != -1 ? true : false}
                    contactData={this.state.contactData[this.state.selectedKey]}
                    onEdit={this.handleEdit}
                    onRemove={this.handleRemove}
                />
                <ContactCreate
                    onClick={this.handleCreate}
                />
            </div>
        );
    }
};