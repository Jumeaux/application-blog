import { Post } from "../post";
import { Subject } from "rxjs";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {

  
   private posts=[];
    postSubject = new Subject<Post[]>();
   

    constructor(private httpClient:HttpClient){

        this.getPosts();
    }
    
    emitPosts(){

        this.postSubject.next(this.posts);
    }

     savePosts() {
         firebase.database().ref('/posts').set(this.posts);
    }
    
    // savePosts() {
    //     this.httpClient
    //       .put('https://http-blog.firebaseio.com/posts.json', this.posts)
    //       .subscribe(
    //         () => {
    //           console.log('Enregistrement terminé !');
    //         },
    //         (error) => {
    //           console.log('Erreur ! : ' + error);
    //         }
    //       );
    // }

    getPosts(){

        firebase.database().ref('/posts')
        .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
           this.emitPosts();
        }
      );
    }

    // getPosts() {
    //     this.httpClient
    //       .get<any[]>('https://http-blog.firebaseio.com/posts.json')
    //       .subscribe(
    //         (response) => {
    //           this.posts = response;
    //           this.emitPosts();
    //         },
    //         (error) => {
    //           console.log('Erreur ! : ' + error);
    //         }
    //       );
    // }

    saveNewPost(post:Post){

        this.posts.push(post);
        this.savePosts();
        this.emitPosts();
    }

    removePost(post:Post){

        const postIndexToRemove = this.posts.findIndex(
            (postItem) => {
              if(postItem === post) {
                return true;
              }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

    Love(post:Post){

        post.loveIts+=1;
        this.savePosts();
        this.emitPosts();
    }
    DontLove(post:Post){
    
        post.loveIts-=1;
        this.savePosts();
        this.emitPosts();
    }

}