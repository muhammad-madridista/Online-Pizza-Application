
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'customer-id',
 template: `<div>
 <div class="col-md-6">
 <form #newCustomerForm="ngForm" autocomplete="off" novalidate (ngSubmit)="findCustomer(newCustomerForm.value)">
       <div class="form-group">
         <label for="id">Customer Id</label>
         <em *ngIf="newCustomerForm.controls.customerId?.invalid && (newCustomerForm.controls.customerId?.touched)">Required</em>
          <input  id="id" type="number" required class="form-control" name="customerId"  (ngModel)= customerdata.customerId placeholder="Enter Customer Id">
         
          <button type="submit"  [disabled]=newCustomerForm.invalid class="btn btn-primary">Find Customer </button>
 
          <h3>
          <div>Customer Name : {{customerdata?.customerName | uppercase}} </div>
  </h3>
  <h2> customerId : {{customerdata?.customerId}} </h2>
  
  <div>Mobile: {{customerdata?.customerMobile}}></div>
  <div> Email:{{customerdata?.customerEmail}} </div>
  <div>Address:{{customerdata?.customerAddress}} </div>
  <div>Username:{{customerdata?.customerUsername}} </div>
  <div>Password:{{customerdata?.customerPassword}} </div>
 
 
 
 
  </div>
  </form>
  <br/>
  <br/>
  <br/>

  <div>         
         
`,   

 
})
export class CustomerByIdComponent {
  customerdata : Customer = new Customer(0,"",0,"","","","")

    
      constructor(private router: Router, private customerService: CustomerService) {
     }   
    
       findCustomer(customer : Customer) {
       this.customerService.getCustomerById(customer.customerId).subscribe(c => this.customerdata =c)
      // this.router.navigate(['/pizzalist'])
       console.log("Customer Id component method is called")
 
}
}
