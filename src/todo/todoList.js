import React, { Component } from 'react';

class TodoList extends Component {
    delete = () => {
      const { data, onDelete } = this.props;

      onDelete(data.id);
    }

    render() {
        const { data } = this.props;
        const { name, number } = data;
        return (
          <>
            <div className="box">
              <div className="flex1">
                <div className="name">{name}</div>
                <div className="number">{number}</div>
              </div>
              <div className="flex2">
                <button>update</button>
                <button onClick={this.delete}>delete</button>
              </div>
            </div>
          </>
        );
      }
}

export default TodoList;