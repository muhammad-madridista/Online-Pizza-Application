import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';




@Component({
  selector: 'user-pizza-list',
    template: `  
                <div class="row">
                <div class="col-2"> 
                <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/pizza/pizzalist']">View Pizza</button>
                </div>
                <div class="col-2"> 
                 <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/pizza/Pizzabycost']">Pizza By Cost </button>
               </div>
                <div class="col-2"> 
                 <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/pizza/pizzaById']">PizzaByID</button>
                 </div>
                 <div class="col-4"> 
                  <button type="submit" class="btn btn-primary" [routerLink] = "['/userpage/pizza/ByPizzType']">PizzaByType</button>
                   </div>
                     <router-outlet></router-outlet>
                `,
 
})
export class UserPizzaBaseComponent 

{

}

