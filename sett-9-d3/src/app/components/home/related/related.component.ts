import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})

export class RelatedComponent {
  posts: Post[] = []; //riceve tutti i post da json
  related: Post[] = []; //pusho i due post da stampare estratti da posts
  included: number[] = [];

  constructor() {
    this.getRelatedPosts();
  }

  async getRelatedPosts() {
    let response = await fetch('../../assets/db.json');
    let data = await response.json();
    this.posts = data;

    if (data) {
      this.printRelatedPosts();
    }
  }

  printRelatedPosts() {
    for (let i=0; i < 2; i++) {
      let index = Math.floor(Math.random()*this.posts.length);
      if (this.included.includes(index)) {
        index = Math.floor(Math.random()*this.posts.length);
      } else {
        this.included.push(index);
      }      
    }
    
    for (let i=0; i < this.included.length; i++) {
      let postIndex = this.included[i] - 1;
      this.related.push(this.posts[postIndex]);
    }
  }
}
