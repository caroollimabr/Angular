import { Component, OnInit } from '@angular/core';
import { CommentService } from './../service/comment.service';

@Component({ //listagem dos arquivos
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(private CommentService: CommentService) { }

  comments: Comment [];

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.CommentService.getAll().subscribe((commentOut: Comment[])=>{
      this.comments = commentOut;
    })
  }

}
