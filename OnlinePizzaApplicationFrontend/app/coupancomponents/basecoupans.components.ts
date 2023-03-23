import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { Coupan } from '../model/coupan.model';
import { CoupanService } from '../service/coupan.service';


@Component({
  selector: 'coupan',
    template: `  
                <div class="row">
                <div class="col-2"> 
                    <button type="submit" class="btn btn-primary" [routerLink] = "['/adminpage/coupans/new']">Add Coupan</button>
                </div>
                <div class="col-8"> 
                 <button type="submit" class="btn btn-primary" [routerLink] = "['/adminpage/coupans/all']">View All Coupans</button>
                 </div>
           
                <router-outlet></router-outlet>
              
                `,
 
})
export class CoupanComponent 

{

}
    