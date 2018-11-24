import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  columnSpan:number=2;
   firstName="Bhuvanesh";
   lastName="Arveti";
   gender="M";
   age=25;
   showDetails:boolean=false; 

   classesToApply:string=" italicClass boldClass";
   applyBoldClass:boolean=true;

   onClick():void{
     console.log("Button clicked");
   }

   toggleDetails():void{
     this.showDetails=!this.showDetails; 
   }

   name:string="Bhuvanesh";

   date:number = 10/5/2018;
   



}
