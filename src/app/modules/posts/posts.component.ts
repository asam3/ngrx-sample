import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getList, update } from './state/posts.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Post } from './posts-interfaces';
import { Dialog } from '@angular/cdk/dialog';
import { SinglePostComponent } from './single-post/single-post.component';
import { AddPostComponent } from './add-post/add-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;

  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource: MatTableDataSource<Post>;

  loading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<{ post: any }>, public dialog: Dialog) {
    this.posts$ = store.select('post');

    // Assign the data to the data source for the table to render
    this.posts$.subscribe((res) => {
      if (res['posts'].length > 0) {
        this.dataSource = new MatTableDataSource(res['posts']);
        this.setPage();
      }
    });
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.store.dispatch(getList());
  }

  openAddNew() {
    const dialogRef = this.dialog.open<string>(AddPostComponent, {
      // width: '250px',
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  update() {
    this.store.dispatch(update());
  }

  openSingle(row: any) {
    const dialogRef = this.dialog.open<string>(SinglePostComponent, {
      // width: '250px',
      data: { id: row.id },
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  setPage() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
