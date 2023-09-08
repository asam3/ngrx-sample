import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  posts$: Observable<any>;
  post: any;

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: any,
    private store: Store<{ post: any }>
  ) {
    this.posts$ = store.select('post');
  }

  ngOnInit() {
    this.posts$.subscribe((res) => {
      if (res['posts'].length > 0) {
        this.findById(res['posts']);
      }
    });
  }

  findById(posts: any) {
    this.post = posts.find((item: any) => item.id === this.data.id);
  }
}
