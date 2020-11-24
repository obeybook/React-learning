import React from 'react';
import { List, Map } from 'immutable';

const TodoItem = ({ id, update, text, checked, updating, onModify, onToggle, onRemove, onUpdate }) => 
  updating ? (
    <li>
        <input value={update} name="update" onModify={onModify}/>
        <button onClick={() => onUpdate(id)}>취소</button>
    </li>
  ) : (
    <li 
        style={{textDecoration: checked ? 'line-through' : 'none'}}
        onClick={() => onToggle(id)}
        onDoubleClick={() => onRemove(id)}
    >
        {text}
        <button onClick={() => onUpdate(id)}>수정</button>
    </li>
  );

const Todos = ({todos, insert, onInsert, onToggle, onRemove, onChange, onUpdate, onModify }) => {
  
    const todoItems = todos.map(
      todo => {
        const { id, checked, text, updating, update } = todo.toJS();
        return (
          <TodoItem
            id={id}
            checked={checked}
            text={text}
            updating={updating}
            update={update}
            onModify={onModify}
            onToggle={onToggle}
            onRemove={onRemove}
            onUpdate={onUpdate}
            key={id}
          />
        )
      }
    )
    return (
      <div>
        <h2>오늘 할 일</h2>
        <input value={insert} name="insert" onChange={onChange}/>
        <button onClick={onInsert}>추가</button>
        <ul>
          { todoItems }
        </ul>
      </div>
    );
  };
  
  Todos.defaultProps = {
    todos: List([
      Map({
        id: 0,
        text: '걷기',
        checked: false
      }),
      Map({
        id: 1,
        text: '코딩하기',
        checked: true
      })
    ]),
    input: ''
  };
  
  export default Todos;