import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appFullname]'
})
export class FullnameDirective {
  @Input () appFullname;
  @HostListener('blur') onBlur(){
   this.convertName();

  }
  convertName(){
    var Name =this.elRef.nativeElement.value;
    var myChar:string;
    var words = Name.split(' ');
    Name="";
    for(let i=0;i<words.length;i++){
      myChar = words[i].substr(0,1);
      myChar = myChar.toUpperCase();
      words[i] = myChar+words[i].substr(1,words[i].length);
      Name += words[i] +" ";

    }
    this.elRef.nativeElement.value = Name;
    this.elRef.nativeElement.style="color:"+this.appFullname;
  }

  constructor(private elRef:ElementRef) {
        console.log(this.elRef);
   }

}
