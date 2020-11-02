import React, { Component } from 'react';
import TodoList from './todoList.js';

class TodoInfo extends Component {
    render() {
      const { data, onDelete } = this.props;
      const list = data.map((item) => (
          <TodoList key={item.id} data={item} onDelete={onDelete} />
        )
      ) 
      return (
        <>
          <div className="wrap">
            {list}
          </div>
        </>
      );
    }
}

export default TodoInfo;