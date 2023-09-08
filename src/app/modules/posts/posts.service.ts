import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions } from '@ngrx/effects';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiBase = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.apiBase + '/posts');
  }
}
