import React, { Component } from 'react';
import '../index.css';

class Cycle extends Component {
    state = {
        list: 1,
    }

    plus = () => {
        let { list } = this.state;
        this.setState({
            list: list + 1,
        });
        console.log('plus Fnc : ', this.state.list);
        console.log('=====================================================');
    };

    // componentWillMount() {
    //     console.log('componentWillMount Fnc : ', this.state.list);
    // };

    componentDidMount() {
        console.log('componentDidMount Fnc : ', this.state.list);
        console.log('=====================================================');
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps prevState : ', prevState.list);
        console.log('=====================================================');

        return null;
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate nextState : ', nextState.list);
        console.log('=====================================================');

        return true;
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate prevState : ', prevState.list);
        console.log('getSnapshotBeforeUpdate this.state.list : ', this.state.list);
        console.log('=====================================================');

        return this.state.list;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate prevState : ', prevState.list);
        console.log('componentDidUpdate this.state.list : ', this.state.list);
        console.log('componentDidUpdate snapshot : ', snapshot);
        console.log('=====================================================');
    };

    render() {
        return (
            <>
                <div className="box">
                    <div className="e">{this.state.list}</div>
                </div>
                <button onClick={this.plus}>+</button>
            </>
        );
    }
}

export default Cycle;