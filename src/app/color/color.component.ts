import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
myColor=[];
  constructor() {  
    this.myColor=[22,21];
  }
       
  ngOnInit() {
    
  }

}
