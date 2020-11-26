import React, { Component } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import * as todoActions from '../store/modules/todo';
import { bindActionCreators } from 'redux';

class TodosContainer extends Component {
    handleChange = (e) => {
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        const { insert, TodoActions } = this.props;
        TodoActions.insert(insert);
        TodoActions.changeInput('');
    }

    handleToggle = (id) => {
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
    }

    handleRemove = (id) => {
        const { TodoActions } = this.props;
        TodoActions.remove(id);
    }

    handleUpdate = (id) => {
        const { TodoActions } = this.props;
        TodoActions.toggleText(id);
        TodoActions.update(id);
    } 

    handleModify = (e) => {
        const { TodoActions } = this.props;
        TodoActions.modify(e.target.value);
    } 

    render() {
        const { handleChange, handleInsert, handleToggle, handleRemove, handleUpdate, handleModify } = this;
        const { insert, todos } = this.props;
        console.log(todos);

        return (
            <Todos
                insert={insert}
                todos={todos}
                onChange={handleChange}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
                onUpdate={handleUpdate}
                onModify={handleModify}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    insert: state.todo.get('insert'),
    todos: state.todo.get('todos'),
})

const mapDispatchToProps = (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
    
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);