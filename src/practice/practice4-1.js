import React, { Component } from 'react';
import '../index.css';

class Cycle3 extends Component {
    id = 2;

    state = {
        number : [1]
    }

    constructor(props){
        super(props);
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
        const { scrollTop, scrollHeight } = this.list;
        return {
            scrollTop,
            scrollHeight,
        };
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        const { scrollHeight } = this.list;
        const diff = this.list.scrollHeight - snapshot.scrollHeight;
        console.log(snapshot.scrollHeight, this.list.scrollHeight);
        this.list.scrollTop += diff;
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
                <div>
                    <div ref={(ref) => {this.list = ref;}} className="box">
                        {arr}
                    </div>
                </div>
                {/* <div>값 : {this.state.number}</div> */}
                <button onClick={this.plus}>+</button>
                {/* <button onClick={this.minus}>-</button> */}
            </>
        );
    }

}

export default Cycle3;