import {Component, ContentChild, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserCardModel} from '../../../core/models/user-card.model';
import {users} from '../../../data/users';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public deleteUsersInfo = [];
  @Input()
  public userInfo: UserCardModel;
  @Input()
  public index: number;

  public deleteUSer(): void {
    this.deleteUsersInfo.push(this.userInfo);
    users.splice(this.index, 1);
  }

  public myFunction() {
    let input, filter;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    console.log(filter);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
