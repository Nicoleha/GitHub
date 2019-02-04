import { Component, OnInit } from '@angular/core';
import {User}from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  User=[new User(0,"")]
  addNewUser(User){
    this.User.push(User)

}
  constructor() { }

  ngOnInit() {
  }

}
