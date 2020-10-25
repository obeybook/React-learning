import React, { Component } from 'react';

class Cycle3 extends Component {
    state = {
        number : 0
    }

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0 ) return false;
        return true;
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdat');
    }

    plus = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1,
        })
    }

    minus = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1,
        })
    }

    render() {
        return (
            <>
                <div>값 : {this.state.number}</div>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </>
        );
    }

}

export default Cycle3;