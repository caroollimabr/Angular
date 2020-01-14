import { CommentsService } from './../service/comments.service';
import { Comments } from './../model/comments';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-id',
  templateUrl: './comments-id.component.html',
  styleUrls: ['./comments-id.component.css']
})
export class CommentsIdComponent implements OnInit {
  id: number
  comments: Comments = new Comments(0, 0, '', '', '')
  constructor(private CommentsService: CommentsService) { }

  ngOnInit() {
  }
    searchClick(){
      this.CommentsService.get(this.id).subscribe((commentsOut: Comments) =>{
        this.comments = commentsOut;
      })
    }
}