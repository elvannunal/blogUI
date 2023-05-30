import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";
import {Post} from "../models/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  post:Post[]=[];
  constructor(private postService: ServicesService) {
  }

  ngOnInit():void{
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAll().subscribe(
      (response: Post[]) => {
        this.post = response;
        console.log("this.posts",this.post)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
