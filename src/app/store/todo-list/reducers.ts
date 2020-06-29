import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from '../todo-list/actions';
export interface TodoListState{
  items : any[];
}

export const initialState: TodoListState ={
  items: []
};

const listReducer = createReducer(
  initialState,
  on(TodoListActions.setNewItem, (state, {item})=>
  ({ ...state, items: state.items.concat(item) })),
  on(TodoListActions.deleteTodoItem,
    (state,{$key} )=> ({ ...state, items: removeItemFromList(state.items,$key)})),
  on(TodoListActions.editingTodoItem,
    (state, {$key, isChecked}) => ({
      ...state,
      items: markListElementAsCompleted(state.items, $key, isChecked)
    }))
);

function removeItemFromList(list: any[], $key: string): any[] {
  return list.filter((element) => {
    return element.$key !== $key
  })
}

function markListElementAsCompleted(list: any[], $key: string, isChecked: boolean): any[] {
  return list.map(value => {
    if (value.$key === $key) {
      return {
        ...value,
        isChecked: isChecked
      }
    } else {
      return value
    }
  })
}

export function reducer(state: TodoListState | undefined, action: Action) {
  return listReducer(state, action);
}
