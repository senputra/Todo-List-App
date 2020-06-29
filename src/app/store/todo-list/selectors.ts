import { createSelector } from '@ngrx/store';
import { TodoListState } from './reducers';
import { State } from '../index';

export const getRootState = (state : State) => state.TodoList;
export const getTasks = createSelector(
  getRootState,
  (state:TodoListState) => state.items
)
