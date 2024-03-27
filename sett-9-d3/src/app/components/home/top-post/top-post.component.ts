import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-top-post',
  templateUrl: './top-post.component.html',
  styleUrls: ['./top-post.component.scss'],
})

export class TopPostComponent {
  post!: Post;
  posts!: Post[];

  constructor() {
    this.getTopPost();
  }

  async getTopPost() {
    let response = await fetch('../../assets/db.json');
    let data = await response.json();
    this.posts = data;
    let index = Math.floor(Math.random() * this.posts.length);
    this.post = this.posts[index];
  }
}
