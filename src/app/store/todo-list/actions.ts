import { createAction, props } from "@ngrx/store";

export const setNewItem =
createAction('[Todo list] Set new todo list item',
props<{item: any}>());

export const deleteTodoItem =
createAction('[Todo list] Delete todo item',
props<{$key:string}>());

export const editingTodoItem =
createAction('[Todo list] Edit todo item',
props<{$key:string, isChecked:boolean}>());
