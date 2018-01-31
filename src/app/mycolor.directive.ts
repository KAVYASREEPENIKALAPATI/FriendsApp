import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  mtColor=[];

  @HostListener('mouseenter') mousein(){
    console.log("kavya");
    this.eleRef.nativeElement.style="color:red";
  }
  @HostListener('mouseleave') mouseout(){
    console.log("hail");
    this.eleRef.nativeElement.style="color:blue";
  }
  @HostListener('click') onclick(){
    console.log("hello");
    this.eleRef.nativeElement.style="color:yellow";
  }
  constructor(private eleRef:ElementRef) { }

}
