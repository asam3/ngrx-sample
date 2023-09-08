import { Injectable } from '@angular/core';
import { PostsService } from '../posts.service';
import { Actions, EffectSources, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './posts.actions';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';

@Injectable()
export class postsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getList),
      exhaustMap(() =>
        this.postsService.getPosts().pipe(
          map((data) => PostActions.loadPostsSuccess({ posts: data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private postsService: PostsService, private actions$: Actions) {}
}
