

import { Component } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import {FriendService} from '../services/friend.service';
import {Friend} from '../friends/models/friend.model';
import { NameValidation } from './name.validation';
@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent  {
  friend:Friend;
  color:string ="blue"
  myFriendForm:FormGroup;
  constructor(private friendService:FriendService) {
    this.friend=new Friend("",0,"");
    this.myFriendForm=new FormGroup(
      {friendName:new FormControl("",[Validators.required,Validators.
        minLength(3),NameValidation.noSpace]),
      friendAge:new FormControl("",[Validators.required
      ]),
      friendPhone:new FormControl("",[Validators.required,Validators.
        minLength(10)]),
      friendAddress:new FormControl("",[]),
      friendFB:new FormControl("",[])
    }
      
    );
   }
   get friendName(){
     return this.myFriendForm.get('friendName');
   }
   get friendAge(){
    return this.myFriendForm.get('friendAge');
  }
  get friendPhone(){
    return this.myFriendForm.get('friendPhone');
  }
  get friendAddress(){
    return this.myFriendForm.get('friendAddress');
  }
  get friendFB(){
    return this.myFriendForm.get('friendFB');
  }

  addFriend(myFriendForm){
    
    
    this.friend.Name=myFriendForm.friendName;
    this.friend.Age=myFriendForm.friendAge;
    this.friend.Phone=myFriendForm.friendPhone;
   // if(myFriendForm.friendFB!=null)
    this.friend.HasFB=myFriendForm.friendFB;
   // if(myFriendForm.friendAddress!=null)
    this.friend.Address=myFriendForm.friendAddress;
    this.friendService.addFriend(this.friend);
   console.log(myFriendForm);
  }

  
}
