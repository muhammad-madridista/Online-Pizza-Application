import { Component,Input,Output } from '@angular/core';
import { Coupan} from '../model/coupan.model';
import { CoupanService } from '../service/coupan.service';

//child component from where data will be received
@Component({
  selector: 'coupan-list',
  template: `<div>
  <h1>Available Coupans</h1> <hr/>
  <div class="container-fluid">
  <div class="well hoverwell thumbwell py-3 my-3" > 
  <div class="row row-cols-2" > 

  <div *ngFor="let coupan of coupans" class="col-md-5"> 
  <all-coupan [coupandata]=coupan (customEvent)="parentFunction($event)"></all-coupan>
  </div>
  </div>
  </div>
  </div>
  `,
   styles: [`h1 { font-weight: 700;  
   color:#fff} `],
 
  })

export class CoupanListComponent {

  private coupans:Coupan[]

  constructor(private coupanService: CoupanService){
    console.log("Coupan List component clicked**********");
    this.coupanService.viewCoupans().subscribe(coupanarray=>this.coupans=coupanarray)

  }
  parentFunction(event){
    console.log(event);
  }
 
}
  
