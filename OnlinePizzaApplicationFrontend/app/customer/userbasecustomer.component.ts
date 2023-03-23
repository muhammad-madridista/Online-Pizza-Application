import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'customer-user-base',
    template: `  
                
                <div class="col-2"> 
                <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/customers/new']">Register</button>
                </div>
                <div class="col-8"> 
                <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/customers/all']">All Customers</button>
                </div>
   
                <router-outlet></router-outlet>
              
                `,
 
})
export class CustomerUserComponent 

{

}



// <div class="col-2"> 
//                 <button type="submit" class="btn btn-primary" [routerLink] = "['/customers/updatecustomer/:cid']">Update Customers</button>
//                 </div>