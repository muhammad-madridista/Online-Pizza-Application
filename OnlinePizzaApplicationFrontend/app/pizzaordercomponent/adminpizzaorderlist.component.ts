import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaOrder } from '../model/pizzaorder.model';
import { PizzaOrderService } from '../service/pizzaorder.service';



@Component({
  selector: 'admin-all-pizza-list',
  template: ` 
              <div class="col-md-5">
              <div class="container">
            <br>
                  <div style="card-align: center;">
                  <div class="card" style="width: 40rem;">
                  <div class="card-body">
                <div>
                <div class=" py-3 my-3">
                  <div>BookingOrderId : {{pizzadata?.bookingOrderId}}</div>
                  <div>Transaction Mode : {{pizzadata.transactionMode}}</div>
                  <div>Quantity : {{pizzadata.quantity}}</div>
                  <div>Size : {{pizzadata.size}}</div>
                  <div *ngIf="pizzadata.totalCost"> 
                      Total Cost :{{pizzadata.totalCost | currency: 'INR'}}
                  </div>
                  <div >Order Date : {{pizzadata.orderDate | date}}</div>
              
                  
                <div *ngIf="pizzadata.pizzaSet">
                <div *ngFor="let pizza of pizzadata.pizzaSet">
                  <div> Pizza Id :{{pizza?.pizzaId}}</div>
                  <div> Pizza Name:{{pizza?.pizzaName}}</div>
                  <div> Pizza Type :{{pizza?.pizzaType}}</div>
                  <div> Pizza Description :{{pizza?.pizzaDescription}}</div>
                  <div> Pizza Cost :{{pizza?.pizzaCost}}</div>
                </div> 
                </div>
                <div *ngIf="pizzadata.order">
                  <div> Order Id :{{pizzadata.order?.orderId}}</div>
                  <div> Order Type :{{pizzadata.order?.orderType}}</div>
                  <div> Order Description :{{pizzadata.order?.orderDescription}}</div>
                  <div> Order Customer Id :{{pizzadata.order?.orderCustomerId}}</div>
                </div> 
                
               
              </div>
    
             
            `,

})
export class AdminPizzaOrderListComponent implements OnInit{


  @Output() event1 = new EventEmitter();
  @Input() pizzadata : PizzaOrder[];

  pizzaOrders: PizzaOrder;
  // public i: number = 10;
  // isDisabled = false;
  // buttonStyle = "btn btn-primary";
  // function1() {
  //   this.isDisabled = false;
  //   this.buttonStyle = "btn btn-success";
  // }
  // onButtonClick() {
  //   this.event1.emit("in event 1 emmitter");
  //   // this.event1.emit(this.pizzadata.orderDate);
  //   console.log("Message on log by on click");
  // }

  constructor(private pizzaService: PizzaOrderService, private activatedRoute: ActivatedRoute,private router :Router) 
    {
      console.log("pizzaid in component"+activatedRoute.snapshot.params['pizzaId'])
      
        // this.pizzaOrders = this.pizzaService.getPizzaById(+activatedRoute.snapshot.params['pizzaId']);
         
        
       
        }
  ngOnInit(): void {
    // this.pizzaService.getPizzaById(+this.activatedRoute.snapshot.params['pizzaId']).subscribe(p=>this.pizzaOrders=p);
     


  }
    
       

  

}
