import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts/posts.component";
import { PostComponent } from './postView/post.component';
import { AddPostComponent } from './addPost/addPost.component';


const routes: Routes=[
  {
    path:'api/Post',
    component: PostsComponent
  },
  {
    path:'api/Post/add',
    component: AddPostComponent
  },
  {
    path:'api/Post/:id',
    component: PostComponent
  },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
