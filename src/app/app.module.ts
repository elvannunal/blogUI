import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {ServicesService} from "./services/services.service";
import { FormsModule } from '@angular/forms';
import { PostComponent } from './postView/post.component';
import { AddPostComponent } from './addPost/addPost.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: 'url', useValue: 'http://localhost:5227/' }, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
