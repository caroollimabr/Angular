import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../Model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  coments: Post[]
  ngOnInit() {
    this.findAll();
  }
  
  findAll(){
    this.postService.getAll().subscribe((comentsOut: Post[])=>{
      this.coments = comentsOut;
    })
  }

}
