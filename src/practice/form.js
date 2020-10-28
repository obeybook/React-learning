import React, { Component } from 'react';
import '../index.css';

class Form extends Component {
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
            <div>
                <input type="text" name="name" onChange={this.inputChange} value={this.state.name} />
                <input type="text" name="number" onChange={this.inputChange} value={this.state.number} />
                <button onClick={this.addInfo}>+</button>
            </div>
        )
    }
}

export default Form;