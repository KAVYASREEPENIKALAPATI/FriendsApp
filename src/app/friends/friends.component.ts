import { Component, OnInit } from '@angular/core';
import {FriendService} from '../services/friend.service';
import {Friend} from '../friends/models/friend.model';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:Friend[];

  constructor(private friendService:FriendService,private myRoute:Router
    ) {
    this.friends=this.friendService.getFriends();
   }
   showFriend(friend){
     console.log(friend.Name);
     this.myRoute.navigate(['/friend',friend.Name]);
   }

  ngOnInit() {
  }

}
