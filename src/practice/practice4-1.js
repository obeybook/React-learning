import React, { Component } from 'react';
import '../index.css';

class Cycle3 extends Component {
    id = 2;

    state = {
        number : [1]
    }

    constructor(props){
        super(props);
        console.log('constructor');
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('*----------------------------------*');
    //     console.log('shouldComponentUpdate', nextState);
    //     if (nextState.number % 5 === 0 ) return false;
    //     return true;
    // }

    // componentWillUpdate (nextProps, nextState) {
    //     console.log('componentWillUpdate', nextState);
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        let { scrollTop, scrollHeight, offsetHeight } = this.list;
        console.log(scrollTop);
        scrollTop = scrollHeight;
        console.log(scrollTop);
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
    }

    plus = () => {
        const { number } = this.state;
        this.setState({
            number: [this.id++, ...number],
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
            <div className="e">{item}</div>
        ));

        return (
            <>
                <div className="box">
                    <div ref={(ref) => {this.list = ref;}}>{arr}</div>
                </div>
                {/* <div>값 : {this.state.number}</div> */}
                <button onClick={this.plus}>+</button>
                {/* <button onClick={this.minus}>-</button> */}
            </>
        );
    }

}

export default Cycle3;