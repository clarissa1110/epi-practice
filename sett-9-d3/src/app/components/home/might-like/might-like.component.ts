import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-might-like',
  templateUrl: './might-like.component.html',
  styleUrls: ['./might-like.component.scss']
})

export class MightLikeComponent {
  posts: Post[] = [];
  mightLike: Post[] = [];
  included: number[] = [];

  constructor() {
    this.getMightLikePosts();
  }

  async getMightLikePosts() {
    let response = await fetch('../../assets/db.json');
    let data = await response.json();
    this.posts = data;

    if (data) {
      this.printMightLikePosts();
    }
  }

  printMightLikePosts() {
    for (let i=0; i < 4; i++) {
      let index = Math.floor(Math.random()*this.posts.length);
      if (this.included.includes(index)) {
        index = Math.floor(Math.random()*this.posts.length);
      } else {
        this.included.push(index);
      }      
    }

    for (let i=0; i < this.included.length; i++) {
      let postIndex = this.included[i] - 1;
      this.mightLike.push(this.posts[postIndex]);
    }
  }
}
