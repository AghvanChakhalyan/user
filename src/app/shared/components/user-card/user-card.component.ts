import {Component, ContentChild, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserCardModel} from '../../../core/models/user-card.model';
import {users} from '../../../data/users';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  public userInfo: UserCardModel;

  public deleteUSer(): void {
    users.splice(this.userInfo.id,1);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
