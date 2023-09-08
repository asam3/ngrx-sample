import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostRoutingModule } from './post-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { SinglePostComponent } from './single-post/single-post.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';

const agnularMaterial = [
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatSortModule,
  DialogModule,
  MatIconModule,
  MatRippleModule,
];

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    ...agnularMaterial,
    ReactiveFormsModule,
  ],
  declarations: [PostsComponent, SinglePostComponent, AddPostComponent],
})
export class PostsModule {}
