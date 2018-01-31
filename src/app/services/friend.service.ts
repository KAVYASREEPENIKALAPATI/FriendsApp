import {Friend} from '../friends/models/friend.model';
import { element } from 'protractor';
export class FriendService{
    friends:Friend[];
    constructor(){
        this.friends=[
            new Friend("Bhavana",22,7338988387,"bangalore",false),
            new Friend("Kavya",21,"8989647532","My address Hyd",false)
        ];
    }
        getFriends(){
            return this.friends;
        
    }
    getFriend(name:string){
        var friend:Friend;
        this.friends.forEach(element=>{
            if(element.Name==name)
            friend=element;
        });
        return friend;
    }
    addFriend(friend:Friend){
        this.friends.push(friend);
    }
}