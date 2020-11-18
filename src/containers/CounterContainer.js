import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as counterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
    handleIncrement = () => {
        const { CounterActions } = this.props;
        CounterActions.increment();
    }

    handleDecrement = () => {
        const { CounterActions } = this.props;
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

const mapStateToProps = (state) => ({
    number: state.counter.number
})

const mapDispatchToProps = (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);