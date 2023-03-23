import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'all-customer',
  template:`
 <body>
            <div class="allcustomer">
            

          <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['/customers',customerdata.customerId]">
        
          <h2 style="text-align:center"> Customer Id : {{customerdata?.customerId}} </h2>
           <div class="content">
          <div>Name : {{customerdata?.customerName }} </div>
          <div>Mobile: {{customerdata?.customerMobile}}></div>
          <div> Email:{{customerdata?.customerEmail}} </div>
          <div>Address:{{customerdata?.customerAddress}} </div><hr>
          <div style="text-align: center;">
          <td><button style='margin-right:16px' (click)="deleteCustomer(customerdata)" class="btn btn-danger">Delete</button>
          <button style='margin-right:16px' (click)="updateCustomer(customerdata)" class="btn btn-primary" style="margin-left: 10px">Edit details</button>
</div>
  </div>
          </div>
        </div>
        </body>
          
      
        
` ,
styleUrls: ['./allcustomer.component.css']
},
                        
 
)
export class AllCustomerComponent {

  @Input() customerdata: Customer[];
  @Output() customEvent = new EventEmitter(); //(customEvent) = "someFunction"
  isDisabled= true ;
  buttonStyle = "btn btn-primary";

  public i : number = 10;
  alert: boolean;
  testFunction(){
    return "I am testing"
  }
  myFunction(){
    this.isDisabled = false
    this.buttonStyle="btn btn-success";
  }
  constructor(private router: Router, private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
  }
  deleteCustomer(customer : Customer) {
    this.customerService.deleteCustomerById(customer.customerId).subscribe(data => console.log(data));
    
    console.log("this method is called")
    this.alert = true;
    
}
updateCustomer(customer : Customer){

  console.log(customer.customerId)
  this.customerService.updateCustomer(customer).subscribe(pipe());
  // this.router.navigate(['/customerlist']);
}

  
            }
            

            // <div>Name : {{customerdata?.customerName }} </div>
            // <div>Mobile: {{customerdata?.customerMobile}}></div>
            // <div> Email:{{customerdata?.customerEmail}} </div>
            // <div>Address:{{customerdata?.customerAddress}} </div>
            // <div>Username:{{customerdata?.customerUsername}} </div>
            // <div>Password:{{customerdata?.customerPassword}} </div>




            

// ` ,