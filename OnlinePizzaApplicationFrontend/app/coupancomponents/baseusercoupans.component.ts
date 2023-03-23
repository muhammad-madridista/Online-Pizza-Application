import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { Coupan } from '../model/coupan.model';
import { CoupanService } from '../service/coupan.service';


@Component({
  selector: 'coupan-user',
    template: `  
                <div class="row">
                <div class="col-12"> 
                <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/coupans/all']">View All Coupans</button>
                </div>
           
                <router-outlet></router-outlet>
              
                `,
 
})
export class CoupanUserComponent 

{

}