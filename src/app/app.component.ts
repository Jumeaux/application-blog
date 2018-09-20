import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'myBlog';
 

  constructor(){

     // Initialize Firebase
     var config = {
    apiKey: "AIzaSyBKfagqnknR0yh8t0U3SYwR2j_DuD87A3I",
     authDomain: "http-blog.firebaseapp.com",
     databaseURL: "https://http-blog.firebaseio.com",
     projectId: "http-blog",
     storageBucket: "http-blog.appspot.com",
     messagingSenderId: "901788781474"
   };
   firebase.initializeApp(config);
  }
 

  
}
