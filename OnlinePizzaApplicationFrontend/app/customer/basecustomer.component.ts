import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'adminbase',
    template: `  
     
        
                <div class="row">
                <div class="col-2"> 
                <button type="submit" class="btn btn-info" [routerLink] = "['/adminpage/customers/all']"> All <br/>Customers </button>
                </div>
                <div class="col-2"> 
                <button type="submit" class="btn btn-info" [routerLink] = "['adminpage/customers/new']">Create Customers</button>
                </div>
                <div class="col-2"> 
                <button type="submit" class="btn btn-info" [routerLink] = "['/adminpage/customers/updatecustomer/:cid']">Update Customers</button>
                </div>
                <div class="col-2"> 
                <button type="submit" class="btn btn-info" [routerLink] = "['/adminpage/customers/deletecustomer']">Delete Customers</button>
                </div>
               
                <router-outlet></router-outlet>
              
                `,
               
})
export class CustomersComponent 

{

}