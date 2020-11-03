import React, { Component } from 'react';

class TodoList extends Component {
    state = {
      name: '',
      number: '',
    }

    delete = () => {
      const { data, onDelete } = this.props;

      onDelete(data.id);
    }

    update = () => {
      const { data, onUpdate } = this.props;

      onUpdate(data.id);

      this.setState({
        name : data.name,
        number : data.number,
      })
    } 

    inputChange = (e) => {
      const { onChange } = this.props;
      const { value, name } = e.target; 

      this.setState({
        [name] : value,
      })

      onChange(this.state);
    }

    submit = () => {
      const { data, onSubmit } = this.props;

      onSubmit(data.id, this.state);

      this.setState({
        name : data.name,
        number : data.number,
      })
    }

    cancel = () => {

    }

    render() {
        const { data } = this.props;
        const { name, number } = data;
        const form = data.updating 
          ? (<>
              <div className="flex1">
                <input type="text" name="name" onChange={this.inputChange} value={this.state.name} />
                <input type="text" name="number" onChange={this.inputChange} value={this.state.number} />
              </div>
              <div className="flex2">
                <button onClick={this.submit}>Submit</button>
                <button onClick={this.cancel}>cancel</button>
              </div>
          </>) 
          : (<>
              <div className="flex1">
                <div className="name">{name}</div>
                <div className="number">{number}</div>
              </div>
              <div className="flex2">
                <button onClick={this.update}>update</button>
                <button onClick={this.delete}>delete</button>
              </div>
            </>) 
        ;
        return (
          <>
            <div className="box">
              {form}
            </div>
          </>
        );
      }
}

export default TodoList;