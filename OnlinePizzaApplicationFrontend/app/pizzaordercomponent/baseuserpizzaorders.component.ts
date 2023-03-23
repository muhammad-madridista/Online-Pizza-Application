import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { PizzaOrderService } from '../service/pizzaorder.service';


@Component({
  selector: 'user-pizza-list',
    template: `
                    <div class="row">
                   <div class="col-2"> 
                   <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/pizzaorder/all']"> Pizza Orders</button>
                   </div>
                   <div class="col-2"> 
                    <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/pizzaorder/bookpizza']">Book Pizza</button>
                    </div>
                    <div class="col-2"> 
                    <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/pizzaorder/date']">Get Order By date</button>
                    </div>
                    </div>
                    <router-outlet></router-outlet>
    `,
 
})
export class PizzaUserOrderComponent 

{

}