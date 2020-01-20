import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import todoApp from './redux/reducers';
import {
    addTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './redux/actions';

let store = createStore(todoApp);

function App() {
    console.log(store.getState());
    store.dispatch(addTodo('Aprender sobre acciones'));
    store.dispatch(addTodo('Aprender sobre reductores'));
    store.dispatch(addTodo('Aprender sobre stores'));
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
    console.log(store.getState());

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
