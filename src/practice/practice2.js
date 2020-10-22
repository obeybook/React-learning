import React, { Component } from 'react';

class State extends Component {
	state = {
		number: 0,
	}

	plus = () => {
		let { number } = this.state;
		this.setState({
			number: number + 1,
		})
	};

	minus = () => {
		this.setState({
			number: this.state.number - 1,
		})
	};

	render() {
		return (
			<>
				<h1>Counter</h1>
				<div>{this.state.number}</div>
				<div><button onClick={this.plus}>+</button></div>
				<div><button onClick={this.minus}>-</button></div>
			</>
		);
	}
}

export default State;