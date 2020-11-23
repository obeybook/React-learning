import React from 'react';
import { List, Map } from 'immutable';

const TodoItem = ({ id, text, input, checked, updating, onChange, onToggle, onRemove, onUpdate }) => 
  updating ? (
    <li>
        <input value={input} name="update" onChange={onChange}/>
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

const Todos = ({todos, input, onInsert, onToggle, onRemove, onChange, onUpdate }) => {
  
    const todoItems = todos.map(
      todo => {
        const { id, checked, text, updating } = todo.toJS();
        return (
          <TodoItem
            id={id}
            checked={checked}
            text={text}
            updating={updating}
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
        <input value={input} name="insert" onChange={onChange}/>
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