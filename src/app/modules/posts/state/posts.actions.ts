import { createAction, props } from '@ngrx/store';

export const getList = createAction('[Posts Component] GetList');
export const loadPostsSuccess = createAction(
  '[Posts Component] load posts success',
  props<{ posts: any }>()
);
export const addNew = createAction('[Posts Component] AddNew');
export const update = createAction('[Posts Component] Update');
