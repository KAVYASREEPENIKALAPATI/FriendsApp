import { AbstractControl } from "@angular/forms";
  export class NameValidation{
       static noSpace(control:AbstractControl){
           var FriendName:string = control.value;
           if(FriendName.indexOf(' ')>0)
           return{noSpace:true};
    
           return null;
       }
  }