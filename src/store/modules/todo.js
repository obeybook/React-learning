import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션 타입 정의
const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';
const UPDATE = 'todo/UPDATE';
const MODIFY = 'todo/MODIFY';
const TOGGLE_TEXT = 'todo/TOGGLE_TEXT';
const PUT = 'todo/PUT';

// 액션 함수 생성
export const changeInput = createAction(CHANGE_INPUT, value => value );
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const update = createAction(UPDATE, id => id);
export const toggleText = createAction(TOGGLE_TEXT, id => id);
export const modify = createAction(MODIFY, value => value );
export const put = createAction(PUT, id => id);

let id = 0;

const initialState = Map({
    insert: '',
    todos: List()
});

// 리듀서
// param: 액션 처리 함수 객체, 초기상태
export default handleActions(
    {
        [CHANGE_INPUT]: (state, action) => state.set('insert', action.payload),
        [INSERT]: (state, { payload: text }) => { 
            const item = Map({ id: id++, checked: false, text, update: ''});
            return state.update('todos', todos => todos.push(item));
        },
        [TOGGLE]: (state, { payload: id }) => {
            const index = state.get('todos').findIndex(item => item.get('id') === id);
            return state.updateIn(['todos', index, 'checked'], checked => !checked);
        },
        // [REMOVE]: (state, { payload: id }) => {
        //     const index = state.get('todos').findIndex(item => item.get('id') === id);
        //     return state.deleteIn(['todos', index]);
        // },
        [UPDATE]: (state, { payload: id }) => {
            const index = state.get('todos').findIndex(item => item.get('id') === id);
            return state.updateIn(['todos', index, 'updating'], updating => !updating);
        },
        [MODIFY]: (state, { payload: e }) => {
            const index = state.get('todos').findIndex(item => item.get('id') === e.name);

            return state.setIn(['todos', index, 'update'], e.target.value);
            // state.set('put', action.payload);
        },
        [TOGGLE_TEXT]: (state, { payload: id }) => {
            const index = state.get('todos').findIndex(item => item.get('id') === id);
            const getValue = state.get('todos').find(item => item.get('id') === id);
            return state.setIn(['todos', index, 'update'], getValue.get('text'));
        },
        [PUT]: (state, { payload: id }) => {
            const index = state.get('todos').findIndex(item => item.get('id') === id);
            const getValue = state.get('todos').find(item => item.get('id') === id);
            return state.setIn(['todos', index, 'text'], getValue.get('update'));
        }
    }, initialState);