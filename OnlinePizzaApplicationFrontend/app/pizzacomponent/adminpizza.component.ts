import { Component } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'admin-pizza',
  template: `<div class >
                <h1> Pizza Data </h1>
                <hr/>
                <div class="row row-cols-2">
                   <div *ngFor="let Pizza of Pizzas | paginate: { itemsPerPage: count, currentPage: p }" class="col-md-4">
                         <order-admin [pizzadata] = Pizza (customEvent)="parentFunction($event)" ></order-admin>
                         </div></div>
                         <div class="text-right">
                         <pagination-controls (pageChange)="p = $event"></pagination-controls>
                       </div>
              </div>`,    
              
              styleUrls: ['./order.component.css'],//property binding
})
export class AdminPizzaComponent {
  p: Number = 1;
  count: Number = 4;
  //private pizzaService : PizzaService;
  private Pizzas: Pizza[];
  //dependency injection
  constructor(private pizzaService: PizzaService) {
    console.log("pizza component working");
    //this.pizzaService = new PizzaService();      // mo need to write this, angular creates obj for us in cosntructor
    // this.Pizzas = this.pizzaService.getAllPizza();
    this.pizzaService.getAllPizza().subscribe(pizzaarray => this.Pizzas = pizzaarray)

  }




  parentFunction(event) {
    console.log(event);
  }




}
