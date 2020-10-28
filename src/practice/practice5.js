import React, { Component } from 'react';

class InputPractice extends Component {
    state = {
        name: '',
        number: '',
    }

    inputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    addInfo = () => {
        const { name, number } = this.state;
        const { onCreate } = this.props;

        onCreate(name, number);

        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        return (
            <>
                <input type="text" name="name" onChange={this.inputChange} value={this.state.name} />
                <input type="text" name="number" onChange={this.inputChange} value={this.state.number} />
                <button onClick={this.addInfo}>+</button>
            </>
        )
    }
}

export default InputPractice;