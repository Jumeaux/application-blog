import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/service.post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  
  postsList:Post[]=[];

  postSubsciption:Subscription;
  constructor(private postService:PostService) { }

  ngOnInit(){

    this.postSubsciption=this.postService.postSubject.subscribe(
      (posts:Post[])=>{

        this.postsList=posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy(){

    this.postSubsciption.unsubscribe();
  }

}
