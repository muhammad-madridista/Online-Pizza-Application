import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupan } from '../model/coupan.model';
import { PizzaOrder } from '../model/pizzaorder.model';
import { CoupanService } from '../service/coupan.service';

import { PizzaOrderService } from '../service/pizzaorder.service';


@Component({
  selector: 'pizza-by-cost',
  template: `<form [formGroup]="getByCostForm" autocomplete = "off" novalidate (ngSubmit)="getPizzaOrderByCost(getByCostForm.value)">
          <div class="form-row">
              <div class="form-group col-md-6">
              <label for="inputOrderId">BookingOrderId</label>
              <em *ngIf="getByCostForm.controls.bookingOrderId?.invalid && (getByCostForm.controls.bookingOrderId?.touched)">Required</em> 
              <input id="inputOrderId" type="number" class="form-control" formControlName="bookingOrderId" readonly required name = "bookingOrderId" placeholder="enter id"  />
              </div>
              <div class="form-group col-md-6">
              <label for="inputSize">Size</label>
              <em *ngIf="getByCostForm.controls.size?.invalid && (getByCostForm.controls.size?.touched)">Required</em> 
              <input id="inputSize" type="text" class="form-control" formControlName="size" readonly  required name = "size"  placeholder="eg:small medium">
              </div>
          </div>
          <div class="form-row">
              <div class="form-group col-md-6">
              <label for="inputQuantity">Quantity</label>
              <em *ngIf="getByCostForm.controls.quantity?.invalid && (getByCostForm.controls.quantity?.touched)">Required</em> 
              <input id="inputQuantity" type="number" class="form-control" formControlName="quantity" readonly required name = "quantity"  placeholder="enter the no of quantity">
              </div>
          <!--
              <div class="form-group col-md-6">
              <label for="coupanID">Coupan id</label>
              <select id ="coupanID" formControlName="coupanId" class="form-control" (change)="calculate($event.target.value)">
              <option *ngFor="let coupan of coupans">{{coupan?.coupanId}}</option>
              </select>
              </div> -->
          </div>
          <button type="submit"  [disabled]=getByCostForm.invalid class="btn btn-primary">Calculate </button>
          </form>
          <!--
           <div class="row">
                  <div *ngFor="let orderpizza of pizz" class= "col-md-4" > 
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
                  </div>
                  </div>

      -->
             `,

})
export class PizzaOrderByCost 
{
  coupans:Coupan[]
  pizz :PizzaOrder ;
  coupandisc :number;
  getByCostForm: FormGroup;
 finalBill :number = 0;
  pizza: PizzaOrder;

  constructor(private pizzaService: PizzaOrderService,private activatedRoute : ActivatedRoute,private router :Router,private coupanService :CoupanService) {
    this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.coupanService.viewCoupans().subscribe(coupan =>this.coupans = coupan);
    console.log(history.state)
    this.getByCostForm = new FormGroup 
    ({
        bookingOrderId : new FormControl(history.state.bookingOrderId),
        orderDate :new FormControl(null),
        transactionMode : new FormControl(null),
        quantity : new FormControl(history.state.quantity),
        size : new FormControl(history.state.size),
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
getPizzaOrderByCost(pizzaorder :PizzaOrder)
 {


    console.log("In component"+pizzaorder);
    console.log(pizzaorder.bookingOrderId);
    console.log(pizzaorder.size);
    console.log(pizzaorder.quantity)
    console.log(pizzaorder.totalCost);
    console.log("Value"+this.getByCostForm.value);
    // this.pizzaService.getPizzaOrderByCost(this.activatedRoute.snapshot.params.pizzaId,this.activatedRoute.snapshot.params.size,this.activatedRoute.snapshot.params.quant,this.getBydateForm.value).subscribe(orderpizza => this.pizza = orderpizza);
   this.pizzaService.getPizzaOrderByCost(pizzaorder.bookingOrderId,pizzaorder.size,pizzaorder.quantity,pizzaorder).subscribe(orderpizza => this.pizz = orderpizza);
    console.log("in order cost method of pizza order");
    console.log("Value"+this.getByCostForm.value);
    this.calculatefinal()
  }

  calculate(coupanId:number)
  {
     console.log("********"+coupanId)
     this.coupans.filter(coupan=>coupan.coupanId==coupanId).map(coupan =>this.coupandisc =coupan.coupanDiscount)
     console.log(this.coupandisc)

 }
 calculatefinal()
 {
      this.finalBill =  this.pizza.totalCost - this.coupandisc;
      console.log("Final Bill is"+this.finalBill);
 }

}

//  <div class="row">
                  
// <div>BookingOrderId : {{pizza?.bookingOrderId}}</div>
// <div>Transaction Mode : {{pizza?.transactionMode}}</div>
// <div>Quantity : {{pizza?.quantity}}</div>
// <div>Size : {{pizza?.size}}</div>
// <div> 
// Total Cost :{{pizza?.totalCost | currency: 'INR'}}
// </div>
// <div >Order Date : {{pizza?.orderDate }}</div>
// <div>
//   <div> Order Id :{{pizza?.order?.orderId}}</div>
//   <div> Order Type :{{pizza?.order?.orderType}}</div>
//   <div> Order Description :{{pizza?.order?.orderDescription}}</div>
//   <div> Order Customer Id :{{pizza?.order?.orderCustomerId}}</div>
// </div>
// </div>
// <div class="col-md-10">
//               <form #getByCostForm="ngForm" autocomplete="off" novalidate (ngSubmit)="getPizzaOrderByCost(getByCostForm.value)">
//               <div class="form-group">
//                <label for="id">Find Pizza Order By Cost</label>
//                 <input  id="inputOrderId" type="number" required class="form-control" name="bookingOrderId"  ngModel placeholder="Enter Booking Id">
//                 <br/>
//                 <input  id="inputSize" type="text" required class="form-control" name="size"  ngModel placeholder="Enter Pizza Size">
//                 <br/>
//                 <input  id="inputQuantity" type="number" required class="form-control" name="quantity"  ngModel placeholder="Enter Pizza Quantity">
               
//                 <button type="submit"  [disabled]=getByCostForm.invalid class="btn btn-primary">Calculate </button>
                 
//                  <div> 
//                   Total Cost :{{pizz?.totalCost}}
//                   </div>
//               </div>
//                     </form>
//               </div>      
                    
                       