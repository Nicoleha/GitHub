import { Component, OnInit } from '@angular/core';
import {User}from '../user';
import {HttpClient} from '@angular/common/http';
import {HttpRequestService}from '../repos-request/http-request.service'
import { Repository } from '../repository';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[HttpRequestService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  Users:User;
  repos:Repository;
  addNew(user){
    // this.User.push(User)
    this.Users= new User(user.name)
}
  constructor(private reposRequest:HttpRequestService) { 
    this.Users= new User("");
    this.repos=new Repository(0,0,0,new Date(),"","");
  }

  ngOnInit() {
    this.reposRequest.reposRequest(this.Users)
    this.repos=this.reposRequest.repos
  }

}
