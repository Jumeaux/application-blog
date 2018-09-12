import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem:Post;

  constructor() { }

  ngOnInit() {
  }

  onLove(){

    this.postItem.loveIts+=1;
  }
  onDontLove(){

    this.postItem.loveIts-=1;
  }

}
