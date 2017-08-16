import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const name = 'Pedro Sierra';
const age = 214;

ReactDOM.render(
    <App name={name} age={age} />,
    document.getElementById('root')
);