import React, { Component } from 'react';

class Cycle3 extends Component {
    state = {
        number : [1]
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
        console.log('*----------------------------------*');
        console.log('shouldComponentUpdate', nextState);
        if (nextState.number % 5 === 0 ) return false;
        return true;
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate', nextState);
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdat', prevState);
    }

    plus = () => {
        const { number } = this.state;
        this.setState({
            number: number.concat(1),
        })
    }

    // minus = () => {
    //     const { number } = this.state;
    //     this.setState({
    //         number: number - 1,
    //     })
    // }

    render() {
        const { number } = this.state;
        const arr = number.map((item) => (
            <div>{item}</div>
        ));

        return (
            <>
                {/* <div>값 : {this.state.number}</div> */}
                {arr}
                <button onClick={this.plus}>+</button>
                {/* <button onClick={this.minus}>-</button> */}
            </>
        );
    }

}

export default Cycle3;