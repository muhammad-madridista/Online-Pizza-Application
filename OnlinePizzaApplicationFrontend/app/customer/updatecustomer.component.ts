import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { pipe } from "rxjs";

import { Customer } from "../model/customer.model";
import { CustomerService } from "../service/customer.service";


@Component({
    selector: 'update-customer',
    template:
    
  
    `<div class="col-md-6">
    <div class="container">
     <br>
                <div style="card-align: center;">
              <div class="card" style="width: 40rem;">
              <div class="card-body">
    
        <div *ngIf = "alert" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong> Updated Successfully</strong> 
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
          <button type="submit"  [disabled]=newCustomerForm.invalid class="btn btn-primary">Update</button>
        
          <button type="reset" class="btn btn-primary" style="margin-left: 2%;" >Reset</button>
      <form>`,
      styleUrls: ['./updatecustomer.component.css']

},
)
export class UpdateCustomerComponent implements OnInit {
 
    cid : number
    customer : Customer ; 
  
    constructor(private router: Router, private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
     this.customerService.getCustomerById(+this.activatedRoute.snapshot.params['cid']).subscribe(customer => this.customer = customer);
  
     
    }
  
    updateCustomer(customer){
         this.customerService.updateCustomer(customer).subscribe(pipe());
        //  this.router.navigate(['/customerlist']);
    }
  }












// export class UpdateCustomerComponent implements OnInit {
//     cid: number
//     private customer: Customer ;
//       // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
//       constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,private router : Router) {
        
//         console.log("customer List component clicked****");}
//         ngOnInit(): void {
//            this.customerService.getCustomerById(+this.activatedRoute.snapshot.params['customerId']).subscribe(customer => this.customer = customer);
//          }
        
//            updateCustomer(customer:Customer){
//              console.log("***" + JSON.stringify(customer))
//              this.customerService.updateCustomer(customer).subscribe(customer => this.customer = customer)
//              alert("Data Updated Successfully!!!");
//              this.router.navigate(['/customerlist']);
//            }  
//            cancel(){
//             this.router.navigate(['/customerlist'])
//           }
//         }

























//  ['em{float:right; color: red; padding-left-10px;}']