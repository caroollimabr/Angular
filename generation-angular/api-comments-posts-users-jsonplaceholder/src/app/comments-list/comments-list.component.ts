import { CommentsService } from './../service/comments.service';
import { Comments } from './../model/comments';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  constructor(private CommentsService: CommentsService) { }

  comments: Comments[];
  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.CommentsService.getAll().subscribe((commentsOut: Comments[]) => {
      this.comments = commentsOut;
  })

}}
