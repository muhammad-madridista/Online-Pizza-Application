import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'all-usercoupan',
  template: 
  `
  <div >
  <div class="row">  
  <div class="col-md-5"> 
<div class="well hoverwell thumbwell py-3 my-3 " [routerLink]="['/coupans/coupans',coupandata.coupanId]">
<h2>Name:{{coupandata?.coupanName | titlecase}}</h2>
  <div>CoupanId:{{coupandata?.coupanId}}</div>
  <div>CoupanDescription:{{coupandata?.coupanDescription}}</div>
  <div>CoupanDiscount:{{coupandata?.coupanDiscount}}</div>

  

  <div *ngIf="coupandata?.imageUrl" >
  <span><img [src]=coupandata.imageUrl width="100" height="100"></span>
  </div>

  
 </div>
  </div>  
  `
})

export class AllUserCoupanComponent {
  @Input() coupandata;
  @Output() customEvent = new EventEmitter();

  isDisabled = true;
  buttonStyle = "btn btn-primary";

  myFunction() {
    this.isDisabled = false
    this.buttonStyle = "btn btn-success"
  }

  onButtonClick() {
    this.customEvent.emit(this.coupandata.name);
    //console.log("Message is logged")
  }
}