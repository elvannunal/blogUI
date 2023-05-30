import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/posts";
import {UpdatePostRequest} from '../models/updatePostRequest';
import {AddPostRequest} from '../models/addPostRequest';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private httpClient: HttpClient, @Inject("url") private url: string) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + "api/Post");
  }

  getPostById(id:string):Observable<Post>{
    return this.httpClient.get<Post> (this.url + 'api/Post/' + id);
  }

  updatePost(id:string | undefined ,updatePost: UpdatePostRequest):Observable<Post>{
    return this.httpClient.put<Post>(this.url + 'api/Post/' + id,updatePost);
  }

  addPost(addPostRequest: AddPostRequest):Observable<Post>{
    return this.httpClient.post<Post>(this.url + 'api/Post/',addPostRequest);
  }

  deletePost(id:string | undefined ):Observable<Post>{
    return this.httpClient.delete<Post>(this.url + 'api/Post/' + id);
  }
}
