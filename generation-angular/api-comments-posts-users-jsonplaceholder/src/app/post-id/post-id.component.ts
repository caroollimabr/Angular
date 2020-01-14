import { PostService } from './../service/post.service';
import { Post } from './../model/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {
  id: number
  post: Post = new Post(0, 0,'','')
  constructor(private PostService: PostService) { }

  ngOnInit() {
  }
    searchClick(){
      this.PostService.get(this.id).subscribe((postOut: Post) =>{
        this.post = postOut;
      })
    }
}
