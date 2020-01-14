import { Component, OnInit } from '@angular/core';
import { CommentService } from './../service/comment.service';
import { Comment } from './../../model/comment';


@Component({
  selector: 'app-comment-id',
  templateUrl: './comment-id.component.html',
  styleUrls: ['./comment-id.component.css']
})
export class CommentIdComponent implements OnInit {
  id: number
  comment: Comment = new Comment(0, 0, '', '', '')

  constructor(private CommentService: CommentService) { }

  ngOnInit() {
  }

  searchClick(){
    this.CommentService.get(this.id).subscribe((commentOut: Comment)=>{
      this.comment = commentOut;
    })
  }

}