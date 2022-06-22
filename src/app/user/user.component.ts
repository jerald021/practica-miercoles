import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  gender: string;
  userList: User[];
  isDisable: Boolean;

  constructor() {
    this.name = '';
    this.age = 0;
    this.email = '';
    this.gender = '';
    this.userList = [];
    this.isDisable = true;
  }

  ngOnInit(): void {
    this.userList.push(new User('name1', 21, 'dfsjdskjfdjk@dfdfkd.com', 'M'));
  }
  toggleButton(): void {
    this.isDisable = !this.isDisable;
  }

  addUser(): void {
    this.userList.push(new User(this.name, this.age, this.email, this.gender));
    console.log(this.userList[this.userList.length - 1]);
    if (this.age < 0) {
    }
    this.toggleButton();
  }
  addClass(age: number) {
    if (age < 18) return 'angelica';
    else if (age > 65) return 'claudia';
    return 'jerald';
  }
}
