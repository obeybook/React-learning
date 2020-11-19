import React from 'react';
import CounterContainer from '../containers/CounterContainer';
import TodoContainer from '../containers/TodoContainer';
import AppTemplate from './AppTemplate.js';

const Main = () => {
    return (
        <AppTemplate counter={<CounterContainer />} todos={<TodoContainer />} />
    )
}

export default Main;