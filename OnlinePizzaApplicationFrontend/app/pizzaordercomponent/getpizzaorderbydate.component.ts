import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { PizzaOrder } from '../model/pizzaorder.model';


import { PizzaOrderService } from '../service/pizzaorder.service';


@Component({
  selector: 'pizza-by-date',
  template: `
            <div class="col-md-10">
            <form #getBydateForm="ngForm" autocomplete="off" novalidate (ngSubmit)="getPizzaBydate(getBydateForm.value)">
            <div class="form-group">
               <label for="id">Find Pizza By Order Date</label>
                <input  id="inputorderDate" type="date" required class="form-control" name="orderDate"  ngModel placeholder="Enter Pizza Type">
                 <button type="submit"  [disabled]=getBydateForm.invalid class="btn btn-primary">Find Pizza </button>
                <div class="row">
                  <div *ngFor="let orderpizza of orderpizzas" class= "col-md-4" > 
                    <div>BookingOrderId : {{orderpizza?.bookingOrderId}}</div>
                    <div>Transaction Mode : {{orderpizza?.transactionMode}}</div>
                    <div>Quantity : {{orderpizza?.quantity}}</div>
                    <div>Size : {{orderpizza?.size}}</div>
                    <div> 
                    Total Cost :{{orderpizza?.totalCost | currency: 'INR'}}
                    </div>
                    <div >Order Date : {{orderpizza?.orderDate }}</div>
                    <div>
                      <div> Order Id :{{orderpizza?.order?.orderId}}</div>
                      <div> Order Type :{{orderpizza?.order?.orderType}}</div>
                      <div> Order Description :{{orderpizza?.order?.orderDescription}}</div>
                      <div> Order Customer Id :{{orderpizza?.order?.orderCustomerId}}</div>
                    </div>

                    <div *ngIf="orderpizzas.pizzaSet">
                      <div *ngFor="let pizza of orderpizzas.pizzaSet">
                        <div> Pizza Id :{{pizza?.pizzaId}}</div>
                        <div> Pizza Name:{{pizza?.pizzaName}}</div>
                        <div> Pizza Type :{{pizza?.pizzaType}}</div>
                        <div> Pizza Description :{{pizza?.pizzaDescription}}</div>
                        <div> Pizza Cost :{{pizza?.pizzaCost}}</div>
                      </div> 
                   </div>
                </div>
                    
              </div>
                 
            </div>
            </form>
            </div>      
                    
                       
             `,

})
export class PizzaOrderByDate implements OnInit
{
  private orderpizzas: PizzaOrder[];
  getBydateForm: FormGroup;


  constructor(private pizzaService: PizzaOrderService,private activatedRoute : ActivatedRoute) {

  }
  ngOnInit(): void {
        
    this.getBydateForm = new FormGroup 
    ({
        bookingOrderId : new FormControl(''),
        orderDate :new FormControl(''),
        transactionMode : new FormControl(''),
        quantity : new FormControl(null),
        size : new FormControl(null),
        totalCost : new FormControl(null),
        order : new FormGroup
        ({
            orderId: new FormControl(null),
            orderType: new FormControl(null),
            orderDescription: new FormControl(null),
            orderCustomerId: new FormControl(null)
        })
    });
}
  getPizzaBydate(pizzaorder :PizzaOrder) {
    console.log("In component"+pizzaorder.orderDate);
  
    console.log(pizzaorder);
     this.pizzaService.getPizzaOrderByDate(pizzaorder.orderDate).subscribe(orderpizza => this.orderpizzas = orderpizza);
   // this.pizzaService.getPizzaOrderByDate(this.activatedRoute.snapshot.params.pizzaId).subscribe(pizzaList =>this.pizzaOrders =pizzaList);
    console.log("in update pizza")
    
  }


  // parentFunction(event)
  // {
  //   console.log(event);
  //   console.log("Function called in parent");
  // }
}
// <div class="row row-cols-2"> 
//            <div *ngFor="let peezaa of peezaas" class="col-md-4">
//             <h3>
//             <div>Pizza Name : {{peezaa?.pizzaName | uppercase}} </div>
//              </h3>

//             <div>Pizza ID : {{peezaa?.pizzaId}} </div>
//             <div>Pizza cost : {{peezaa?.pizzaCost | currency : 'INR' }} </div>
//             <div>Pizza Type : {{peezaa?.pizzaType}} </div>
//             <div>Pizza Description : {{peezaa?.pizzaDescription}} </div>
//             </div>
//             </div>



//            </div>
//            </form>
//            <br/>
//            <br/>
//            <br/>

//            <div>         
                     
//