import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from './../Model/post'

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {

  id: number;
  comments: Post = new Post(0, 0, '', '');

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  searchClick(){
    this.postService.getById(this.id).subscribe((commentsOut: Post) => {
      this.comments = commentsOut;
    })
  }

}
