import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PizzaOrderService } from '../service/pizzaorder.service';


@Component({
  selector: 'delete-pizza',
  template: `
            
            `,

})
export class DeletePizzaOrderComponent implements OnInit
{

  constructor(private router: Router, private pizzaService: PizzaOrderService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let pizzaNo: number = this.activatedRoute.snapshot.params['pizId'];
    console.log("in componenet"+pizzaNo)
    this.pizzaService.deletePizza(pizzaNo).subscribe(data => console.log(data));
    alert("do you want to delete this order");
    this.router.navigate(['/userpage/pizzaorder/all']);
  }
  // addPizza(newpizza :PizzaOrder)
  //       {
  //            this.pizzaService.addPizza(newpizza).subscribe(pizzalist => this.pizza = pizzalist);
  //            console.log(newpizza)
  //            this.router.navigate(['/pizza'])
  //            console.log(newpizza)
  //           // console.log(newpizza.orderCustomerId);
            
  //       }
}
