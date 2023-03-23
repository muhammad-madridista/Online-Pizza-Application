import { Component } from '@angular/core';

import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Coupan } from '../model/coupan.model';

import { CoupanService } from '../service/coupan.service';

@Component({
  selector: 'user-coupan',

  template: `<div>
            <h1>Available Coupans</h1> <hr/>
            <div class="row row-cols-2" > 
            <div *ngFor="let coupan of coupans" class="col-md-5"> 
            <all-usercoupan [coupandata]=coupan (customEvent)="parentFunction($event)"></all-usercoupan>
            </div>
            </div>

`,
})



export class ViewCoupanComponent {
  private coupans: Coupan[]

  constructor(private coupanService: CoupanService) {
    console.log(" User Coupan List component clicked**********");
    this.coupanService.viewCoupans().subscribe(coupanarray => this.coupans = coupanarray)

  }
  parentFunction(event) {
    console.log(event);
  }


}