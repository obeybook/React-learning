import React from 'react';
import CounterContainer from '../containers/CounterContainer';
import AppTemplate from './AppTemplate.js';
import Todos from './Todos';

const Main = () => {
    return (
        <AppTemplate counter={<CounterContainer />} todos={<Todos />} />
    )
}

export default Main;