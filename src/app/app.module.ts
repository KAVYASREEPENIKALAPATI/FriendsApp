import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Route,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friend/friend.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { FriendService } from './services/friend.service';
import { FullnameDirective } from './fullname.directive';
import { ColorComponent } from './color/color.component';
import { MycolorDirective } from './mycolor.directive';
const myRoutes:Route[]=[
  {path:'friends',component:FriendsComponent},
  {path:'friend/:fname',component:FriendComponent},

{path:'new',component:AddFriendComponent}
]
 


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendComponent,
    AddFriendComponent,
    FullnameDirective,
    ColorComponent,
    MycolorDirective
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(myRoutes)
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
