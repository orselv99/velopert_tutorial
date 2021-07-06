import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter/Counter';
import Contact from './Components/Contact/Contact';
import LifeCycle from './Components/LifeCycle/LifeCycle'

class App extends React.Component {
    render() {
        return (
            <Contact />
        );
    }
};

ReactDOM.render(<LifeCycle />, document.getElementById('root'));