import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import{User} from '../user'
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  newUser=new User(0,"");
  @Output() addUser=new EventEmitter<User>();
  submitForm(){
      this.addUser.emit(this.newUser);
    this.newUser=new User(0,"");
}
  
  constructor() { }

  ngOnInit() {
  }

}
