import React from 'react';
import Counter from './components/Counter';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Counter/>
                </Provider>
            </div>
        );
    }
}