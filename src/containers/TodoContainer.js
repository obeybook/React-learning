import React, { Component } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import * as todoActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class TodosContainer extends Component {
    handleChange = (e) => {
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        const { input, TodoActions } = this.props;
        TodoActions.insert(input);
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

    render() {
        console.log(this.props);
        const { handleChange, handleInsert, handleToggle, handleRemove } = this;
        const { input, todos } = this.props;

        return (
            <Todos
                input={input}
                todos={todos}
                onChange={handleChange}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    input: state.todo.get('input'),
    todos: state.todo.get('todos'),
})

const mapDispatchToProps = (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);