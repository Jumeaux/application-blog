import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'myBlog';
 


  posts=[

    new Post(
      'France 24', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam laborum perferendis incidunt rem, itaque tenetur, vel rerum alias dicta doloribus sunt, eius sit quasi repellendus assumenda laudantium in sed ab.'
      ,2),

      new Post(
        'RTG', 
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam laborum perferendis incidunt rem, itaque tenetur, vel rerum alias dicta doloribus sunt, eius sit quasi repellendus assumenda laudantium in sed ab.'
      ,-1),
    
      new Post(
        'Espace', 
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam laborum perferendis incidunt rem, itaque tenetur, vel rerum alias dicta doloribus sunt, eius sit quasi repellendus assumenda laudantium in sed ab.'
        ,0)
  ];
}
