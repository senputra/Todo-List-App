import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoListState } from './todo-list/reducers'
import * as fromListReducer from './todo-list/reducers';

export interface State {
  TodoList: TodoListState;
}

export const reducers: ActionReducerMap<State> = {
  TodoList: fromListReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
