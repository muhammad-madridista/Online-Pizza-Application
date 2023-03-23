import { Component } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'pizza',
  styleUrls: ['./order.component.css'],
 
  
  
  
  
  
  
  template: `<div class >
                <h1> Pizza List  </h1>
                <hr/>
                <div class="row row-cols-2">
                   <div *ngFor="let Pizza of Pizzas  | paginate: { itemsPerPage: count, currentPage: p }" class="col-md-4">
                         <order [pizzadata] = Pizza (customEvent)="parentFunction($event)" ></order>
                         </div></div>
                    
              </div>
              
              <div class="text-right">
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  </div>

              `,           //property binding
})
export class PizzaComponent {
  p: Number = 1;
  count: Number = 4;
  
  private Pizzas: Pizza[];
  //dependency injection
  constructor(private pizzaService: PizzaService) {
    console.log("pizza component working");
    
    this.pizzaService.getAllPizza().subscribe(pizzaarray => this.Pizzas = pizzaarray)

  }




  parentFunction(event) {
    console.log(event);
  }


}