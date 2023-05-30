import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";
import {Post} from "../models/posts";
import { AddPostRequest } from '../models/addPostRequest';

@Component({
  selector: 'add-app-posts',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css']
})
export class AddPostComponent {


  constructor(private postService: ServicesService) {
  }

  ngOnInit():void{
   
  }

  post:AddPostRequest={
    title:'',
    content:'',
    urlHandle:'',
    featuredImageUrl:'',
    visible:false,
    author:''
  }

  addPost(): void {
    this.postService.addPost(this.post).subscribe(
      res=>{
        alert("yeni blog kaydedildi")
        console.log("add responese:",res)
      }
    )
  }

}
