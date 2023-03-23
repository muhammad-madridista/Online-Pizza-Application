import { Component } from '@angular/core';

import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Coupan } from '../model/coupan.model';

import { CoupanService } from '../service/coupan.service';

@Component({
  selector: 'coupan',
 
 template: `<div>
  <div class="well hoverwell thumbnail py-3 my-3">
   
   <h2> Name : {{coupan?.coupanName | uppercase}} </h2>
   <div>CoupanDescription:{{coupan?.coupanDescription}}</div>
   <div>CoupanDiscount:{{coupan?.coupanDiscount}}</div> 

          <div *ngIf="coupan?.imageUrl" >
          <span><img [src]=coupan.imageUrl width="100" height="100"></span>
          </div>

          
  
  </div>
  </div>

`,
})



export class CoupanByIdComponent {

  private coupan: Coupan;



  constructor(private router: Router,private coupanService: CoupanService, private activatedRoute: ActivatedRoute)
  {

console.log(+activatedRoute.snapshot.params['cid'])
this.coupanService.getCoupanById(+activatedRoute.snapshot.params['cid']).subscribe(c => this.coupan=c)
 }


}



