import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/service.post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem:Post;
  

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  onLove(post:Post){

    this.postService.Love(post);
  }
  onDontLove(post:Post){

    this.postService.DontLove(post);
  }

  onDeletePost(post:Post){

    this.postService.removePost(post);
  }

}
