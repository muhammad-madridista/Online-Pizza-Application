import { style } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CoupanService } from '../service/coupan.service';

//parent component from where data is inputted

@Component({
  selector: 'all-coupan',
  template: `
  <div class="col-md-6">
  <div class="container">
  <br>
  <div style="card-align: center;">
           <div class="card" >
          
           <div class="card-body">


  

<div class="well hoverwell thumbwell py-3 my-3 " >
<h2>Name:{{coupandata?.coupanName | titlecase}}</h2>
  <div>CoupanId:{{coupandata?.coupanId}}</div>
  <div>CoupanDescription:{{coupandata?.coupanDescription}}</div>
  <div>CoupanDiscount:{{coupandata?.coupanDiscount}}</div>

  <div style="text-align: center;">
  <td><button style='margin-right:16px' (click)="deleteCoupans(coupandata.coupanId)" class="btn btn-danger">Delete</button>
  <button [class]=buttonStyle style='margin-right:16px' (click)="editCoupans(coupandata.coupanId)" style="margin-left: 10px">Edit</button>

</div>

 

 

  </div>  
  
  `,
  // styles: ['h1 { font-weight: 700;   } '],
  styleUrls: ['./coupanlist.component.css']
})

export class AllCoupanComponent {
  @Input() coupandata;
  @Output() customEvent = new EventEmitter();

  constructor(private router: Router) {
  }

  isDisabled = true;
  buttonStyle = "btn btn-primary";

  myFunction() {
    this.isDisabled = false
    this.buttonStyle = "btn btn-success"
  }


  deleteCoupans(cid) {
    this.router.navigateByUrl("/adminpage/coupans/deletecoupans/" + cid)
  }

  editCoupans(cid) {
    this.router.navigateByUrl("/adminpage/coupans/editcoupans/" + cid)
  }

}

