import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Friend} from '../friends/models/friend.model';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
friend:Friend;
  constructor(private friendService:FriendService,
    private activeRoute:ActivatedRoute,private myRoute:Router) { }

  ngOnInit() {
    var Name;
    this.activeRoute.params.subscribe(params=>{
      Name=params['fname'];
    });
  
    //console.log(Name);
    this.friend=this.friendService.getFriend(Name);
  }
  gotoList(){
    this.myRoute.navigateByUrl('/friends');
  }

}
