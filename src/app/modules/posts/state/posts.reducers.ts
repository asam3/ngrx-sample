import { createReducer, on } from '@ngrx/store';
import { addNew, getList, update, loadPostsSuccess } from './posts.actions';

export const initialState: any = {
  posts: [],
};

export const postsReducer = createReducer(
  initialState,
  // on(getList, (state) => {}),
  on(addNew, (state) => ({ ...state, posts: [{ hi: 'hi' }] })),
  on(update, (state) => []),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
  }))
);
