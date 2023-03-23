import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable} from 'rxjs';
import {tap } from 'rxjs/operators';
import { PizzaOrder } from '../model/pizzaorder.model';

import { PizzaOrderService } from '../service/pizzaorder.service';


@Component({
  selector: 'pizza-order-list',
    template: ` <div>
                    <h1>Pizza List</h1><br/>
                  </div>
                  <div class="row">
                    <div *ngFor="let pizza of pizzaOrders" class= "col-md-4" >
                      <all-pizza-list [pizzadata] = pizza (event1) ="parentFunction($event)"></all-pizza-list>  
                      </div>   
                  </div>
                `,
                styles: ['h1{color:white;}']
      
 
})
export class PizzaOrdersComponent 
{
 private pizzaOrders: PizzaOrder[];
  
 
  constructor(private pizzaService : PizzaOrderService)
  {
    console.log("************ in pizza component")
  //  let obs: Observable<PizzaOrder[]> = this.pizzaService.getAllPizzas();
  //  obs.subscribe(pizzaList => this.pizzaOrders = pizzaList)
   this.pizzaService.getAllPizzas().subscribe(pizzaList => this.pizzaOrders = pizzaList)
 
  }

  // updatePizza(pizzaId : number)
  //       {
  //         this.router.navigateByUrl("/userpage/pizzaorder/updatePizzaOrder/"+pizzaId)
  //       }

  //       totalCostOfPizza(pizzaId:number,pizsize: string ,quant :number)
  //       {
  //         // this.router.navigateByUrl("/pizzaorder/cost" ,{})
  //         console.log("*"+pizsize)
  //         console.log("*"+quant)
  //         this.router.navigateByUrl("/userpage/pizzaorder/cost", { state: { bookingOrderId:pizzaId , size:pizsize ,quantity :quant} });
  //       }

  // parentFunction(event)
  // {
  //   console.log(event);
  //   console.log("Function called in parent");
  // }
}