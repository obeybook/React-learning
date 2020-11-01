import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        name: '',
        number: '',
    }

    onchange = (event) => {
        const { target } = event;
        console.log(event);
        this.setState({
            [target.name]: target.value
        })
    }

    oninsert = () => {
        const { insert } = this.props;

        insert(this.state);
    }

    render() {
        return (
          <>
            <input type="text" name="name" value={this.state.name} onChange={this.onchange} />
            <input type="text" name="number" value={this.state.number} onChange={this.onchange} />
            <button type="button" onClick={this.oninsert}>submit</button>
          </>
        );
      }
}

export default TodoForm