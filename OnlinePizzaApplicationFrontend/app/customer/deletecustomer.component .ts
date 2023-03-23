
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'deletecustomer',
  templateUrl:'./deletecustomer.component.html' ,
  styleUrls: ['./deletecustomer.component.css']
},
                        
 
)




// export class DeleteCustomerComponent  {
  
 
//   private customer: Customer;
//   // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
//   constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,private router : Router) {
  
    
//     if(confirm("Are you sure you want to delete this data?")){
//       this.customerService.deleteCustomerById(customer.customerId).subscribe(data => console.log(data));
//        alert("Deleted Successfully!!");
//        console.log("customer is deleted  **********");// Capture id from URL and passit to service
//        //this.router.navigate(['/customerlist']);
//     }



// }
// }
  export class DeleteCustomerComponent {
    alert : boolean= false

    constructor(private router: Router, private customerService: CustomerService) {
   }   
  
     deleteCustomer(customer : Customer) {
     this.customerService.deleteCustomerById(customer.customerId).subscribe(data => console.log(data));
     
     console.log("this method is called")
     this.alert = true;
     
 }
 closeAlert(){
  this.alert=false
}
}