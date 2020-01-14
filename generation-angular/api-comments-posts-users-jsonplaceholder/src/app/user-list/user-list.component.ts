import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  constructor(private UserService: UserService) { }

  users: User[];
  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.UserService.getAll().subscribe((userOut: User[]) => {
      this.users = userOut;
  })

}}
