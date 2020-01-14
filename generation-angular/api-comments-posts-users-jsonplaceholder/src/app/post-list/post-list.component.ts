import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private PostService: PostService) { }

  posts: Post[];
  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.PostService.getAll().subscribe((postOut: Post[]) => {
      this.posts = postOut;
  })

}}

