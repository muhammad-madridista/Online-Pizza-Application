
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';
import { CustomerByIdComponent } from './customerbyid.component';

@Component({
  selector: 'customer-list',
  template:`<div  class="col-md-8">
  
  <div class="container-md">
  
   <br>
              <div style="card-align: center;">
            <div class="card" style="width: 40rem;">
            <div class="card-body">
  
      <div *ngIf = "alert" class="alert alert-success alert-dismissible fade show" role="alert">
          <strong> Customer Added Successfully</strong> 
          <button (click)="closeAlert()" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

      <form #newCustomerForm="ngForm" autocomplete="off" novalidate (ngSubmit)="addCustomer(newCustomerForm.value)">
  
      
    
      <div class="form-group">
      
          <label for="id">Customer Id</label>
          <input  id="id" type="number"  [pattern] = "'^[1-9][0-9]*$'" class="form-control" name="customerId"  (ngModel)= customerId placeholder="Enter Customer Id"#idd="ngModel">
          <div *ngIf="idd.invalid && (idd.dirty || idd.touched)"class="alert">
      <em *ngIf="idd.errors?.required">id is required.</em><em *ngIf="idd.errors?.pattern">Id Can't be negative or zero</em>
    </div>
    </div>
        

    
        <div class="form-group">
            <label for="name">Customer Name</label>
            <div *ngIf="newCustomerForm.controls.customerName?.invalid && (newCustomerForm.controls.customerName?.touched)"style="font-size: medium; color: rgb(255, 14, 14);">Please enter valid name</div>
            <input  id="name" type="text" required class="form-control" name="customerName"  pattern="^[a-zA-Z]*$" required minlength="4" appForbiddenName="bob" (ngModel)=customer.customerName placeholder="Enter Customer Name"#namee="ngModel" >
            
                
            <div *ngIf="namee.invalid && (namee.dirty || namee.touched)"
            class="alert">
     </div>


        <div class="form-group">
            <label for="Mobile">Customer Mobile</label>
            <em id="errMobile" style="color:  rgb(255, 14, 14); font-size: large;"></em>
            <div *ngIf="newCustomerForm.controls.customerMobile?.invalid && (newCustomerForm.controls.customerMobile?.touched)"style="font-size: medium; color: rgb(255, 14, 14);"> Phone number must contain 10 digit</div>
            <input  id="Mobile" type="tel" required class="form-control" name="customerMobile"  pattern="[0-9]{10}" (ngModel)= customer.customerMobile placeholder="Enter Customer Mobile" required min="0" minlength="10" maxlength="10"#mobilee="ngModel">
            <div *ngIf="mobilee.invalid && (mobilee.dirty || mobilee.touched)"
            class="alert">
    
        </div>            
        <div class="form-group">
            <label for="Email">Customer Email</label>
            <div *ngIf="newCustomerForm.controls.customerEmail?.invalid && (newCustomerForm.controls.customerEmail?.touched)"style="font-size: medium; color: rgb(255, 14, 14);">Please enter valid E-mail</div>
            <input  id="Email" type="text" required class="form-control" name="customerEmail"  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" (ngModel)=customer.customerEmail placeholder="Enter customerEmail"#emaill="ngModel">
            <div *ngIf="emaill.invalid && (emaill.dirty || emaill.touched)"
            class="alert">
            <div *ngIf="newCustomerForm.submitted && email.invalid" class="invalid-feedback"></div>
        
    
      </div>
        <div class="form-group">
            <label for="Address"> customer Address</label>
            <div *ngIf="newCustomerForm.controls.customerAddress?.invalid && (newCustomerForm.controls.customerAddress?.touched)"style="font-size: medium; color: rgb(255, 14, 14);">Please enter valid Address</div>
            <input  id="Address" type="text" required class="form-control" name="customerAddress"  (ngModel)=customer.customerAddress placeholder="Enter  customerAddress">
        </div>
    
     
    </div>
        <button type="submit"  [disabled]=newCustomerForm.invalid class="btn btn-primary">Save</button>
      
        <button type="reset" class="btn btn-primary" style="margin-left: 2%;" >Reset</button>
    <form>` ,
  styleUrls: ['./createcustomer.component.css']
  },
                        
 
)
export class CreateNewCustomerComponent {
  alert : boolean= false
  
  cus: Customer = new Customer(0,"",0,"","","","")
  

  constructor(private router: Router, private customersService: CustomerService){

  }

  addCustomer(customer) {
    this.customersService.addCustomer(customer).subscribe(c => this.cus = c);
   // this.router.navigate(['/Customers'])
    console.log("Customer component method is called")
    this.alert = true;
  }
  cancel() {
    this.router.navigate(['/customers/all'])
  }
  closeAlert(){
    this.alert=false
  }
 

  
}

  

// <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
// <div class="form-group">
// <label for="name">Customer Name</label>
// <em *ngIf="newCustomerForm.controls.customerName?.invalid && (newCustomerForm.controls.customerName?.touched)">Required</em>
// <input  id="name" type="text" required class="form-control" name="customerName"  required minlength="4" appForbiddenName="bob" (ngModel)=customer.customerName placeholder="Enter Customer Name"#namee="ngModel" >
// <div *ngIf="namee.invalid && (namee.dirty || namee.touched)"
// class="alert">
// </div> 




// <div class="form-group">
// <label for="userName"> customer userName</label>
// <em *ngIf="newCustomerForm.controls.userName?.invalid && (newCustomerForm.controls.userName?.touched)">Required</em>
// <input  id="userName" type="text" required class="form-control" name="userName"  (ngModel)=customer.userName placeholder="Enter  userName"#namee="ngModel">
// <div *ngIf="usernamee.invalid && (usernamee.dirty || usernamee.touched)"
// class="alert">
// </div>





// <div class="form-group">
//     <label for="password"> customer password</label>
//     <em *ngIf="newCustomerForm.controls.password?.invalid && (newCustomerForm.controls.password?.touched)">Required</em>
//     <input  id="password" type="text" required class="form-control" name="password"  (ngModel)=customer.password placeholder="Enter  password"#pass="ngModel">
//     <div *ngIf="pass.invalid && (pass.dirty || pass.touched)"
//     class="alert">
// </div>
