import { Component, OnInit } from '@angular/core';
import {User}from '../user';
import {HttpClient} from '@angular/common/http';
import {HttpRequestService}from '../repos-request/http-request.service'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[HttpRequestService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  User=[new User(0,"")]
  addNewUser(User){
    this.User.push(User)

}
  constructor(private http:HttpClient,private reposRequest:HttpRequestService) { }

  ngOnInit() {
  //   this.quoteService.reposRequest()
  //   this.repos=this.quoteService.quote
  // }

}
}