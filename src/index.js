import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';
import Contact from './Components/Contact';

class App extends React.Component {
    render() {
        return (
            <Contact />
        );
    }
};

ReactDOM.render(<Contact />, document.getElementById('root'));