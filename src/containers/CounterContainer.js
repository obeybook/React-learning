import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as counterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';
import { CounterActions } from '../store/actionCreator';

class CounterContainer extends Component {
    handleIncrement = () => {
        CounterActions.increment();
    }

    handleDecrement = () => {
        CounterActions.decrement();
    }

    render() {
        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;
    
        return (
            <Counter 
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        )
    }
}

export default connect(
    (state) => ({
      number: state.counter.number
    })
  )(CounterContainer);