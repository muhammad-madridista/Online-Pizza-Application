
import { Component } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer.component.html',

                          
  styles: ['./customer.component.css'],

                        },
                        )
export class CustomerListComponent {
  private Customers: Customer[];


constructor(private customerService : CustomerService){
  console.log("Customer List");
  this.customerService.getAllCustomer().subscribe(customerList => this.Customers = customerList)
}
  parentFunction(event: any){
  console.log(event);
  }
  

  
}

