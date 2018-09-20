import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../services/service.post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private postService:PostService, private router:Router) { }

  ngOnInit() {

    this.initForm();
  }
  initForm(){

    this.postForm=this.formBuilder.group({
      title:['',Validators.required],
      content:['',Validators.required]

    });
  }

  onSavePost(){

    const title= this.postForm.get('title').value;
    const content= this.postForm.get('content').value;

    const newPost= new Post(title,content);
    this.postService.saveNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}
