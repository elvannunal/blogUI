import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";
import {Post} from "../models/posts";
import { ActivatedRoute } from '@angular/router';
import {UpdatePostRequest} from "../models/updatePostRequest";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private route: ActivatedRoute, private postService: ServicesService) {}
   post:any;

  ngOnInit():void{
    this.getSinglePost();
  }

  getSinglePost(): void {
    this.route.paramMap.subscribe(
        params=>{
            const id=params.get('id');
            if(id){
                this.postService.getPostById(id).subscribe(

                    res=>{ this.post=res;}

                )
            }
        }
    )
  }

  onSubmitPost(): void {

    const updatePostRequest: UpdatePostRequest={
      title:this.post?.title,
      content:this.post?.content,
      urlHandle:this.post?.urlHandle,
      featuredImageUrl:this.post?.featuredImageUrl,
      visible:this.post?.visible,
      author:this.post?.author
    }


   this.postService.updatePost(this.post?.id, updatePostRequest).subscribe(
      res=>{
        alert("kaydedildi")
        console.log("response update: ",res)
      }
    )

  }

  deletePost():void{
    this.postService.deletePost(this.post?.id).subscribe(
      res=>{
        alert("blog silindi.")
      }
    )

  }

}
