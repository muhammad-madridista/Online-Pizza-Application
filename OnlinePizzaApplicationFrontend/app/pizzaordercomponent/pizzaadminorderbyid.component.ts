import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaOrder } from '../model/pizzaorder.model';

import { PizzaOrderService } from '../service/pizzaorder.service';


@Component({
    selector: 'pizza-order-admin',
    template: ` <div>
                  <div class=" py-3 my-3">
                    <div>BookingOrderId : {{pizzaOrders?.bookingOrderId}}</div>
                    <div>Transaction Mode : {{pizzaOrders?.transactionMode}}</div>
                    <div>Quantity : {{pizzaOrders?.quantity}}</div>
                    <div>Size : {{pizzaOrders?.size}}</div>
                    <div> 
                        Total Cost :{{pizzaOrders?.totalCost | currency: 'INR'}}
                    </div>
                    <div >Order Date : {{pizzaOrders?.orderDate | date}}
                    </div>
                    <div>
                    <div> Order Id :{{pizzaOrders?.order?.orderId}}</div>
                    <div> Order Type :{{pizzaOrders?.order?.orderType}}</div>
                    <div> Order Description :{{pizzaOrders?.order?.orderDescription}}</div>
                    <div> Order Customer Id :{{pizzaOrders?.order?.orderCustomerId}}</div>
                    <button type="submit" class="btn btn-primary" [routerLink] = "['/pizzaorder/deleteorder',pizzaOrders?.bookingOrderId]">Delete</button>
                    <br/>
                   <button type="submit" class="btn btn-primary" (click) = "updatePizza(pizzaOrders?.bookingOrderId)">Update</button>
                  <button type="submit" class="btn btn-primary" (click) = "totalCostOfPizza(pizzaOrders?.bookingOrderId,pizzaOrders?.size,pizzaOrders?.quantity)">Calculate</button>
                   </div>
                  </div> 
                </div>

                `,

})
export class PizzaAdminOrderByIdComponent {
  pizzaOrders: PizzaOrder;
  

   
  constructor(private pizzaService: PizzaOrderService, private activatedRoute: ActivatedRoute,private router :Router) 
    {
      console.log("pizzaid in component"+activatedRoute.snapshot.params['pizzaId'])
        // this.pizzaOrders = this.pizzaService.getPizzaById(+activatedRoute.snapshot.params['pizzaId']);
         this.pizzaService.getPizzaById(+activatedRoute.snapshot.params['pizzaId']).subscribe(p => this.pizzaOrders = p)
       
        }
    

        updatePizza(pizzaId : number)
        {
          this.router.navigateByUrl("pizzaorder/updatePizzaOrder/"+pizzaId)
        }

        totalCostOfPizza(pizzaId:number,pizsize: string ,quant :number)
        {
          // this.router.navigateByUrl("/pizzaorder/cost" ,{})
          console.log("*"+pizsize)
          console.log("*"+quant)
          this.router.navigateByUrl("/pizzaorder/cost", { state: { bookingOrderId:pizzaId , size:pizsize ,quantity :quant} });
        }

   
}