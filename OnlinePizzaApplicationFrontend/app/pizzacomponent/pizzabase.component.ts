import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';




@Component({
  selector: 'pizza-list',
    template: `  
                <div class="row">
                <div class="col-2"> 
                <button type="submit" class="btn btn-primary" [routerLink] = "['/adminpage/pizza/addPizza']">Add Pizza</button>
                </div>
                <div class="col-2"> 
                <button type="submit" class="btn btn-primary" [routerLink] = "['/adminpage/pizza/pizzalist']">View Pizza</button>
                </div>
                
                <div class="col-6"> 
                <button type="submit" class="btn btn-primary" [routerLink] = "['/adminpage/pizza/pizzaById']">Pizza By ID</button>
                 </div>
                
                <router-outlet></router-outlet>
                `,
 
})
export class PizzaBaseComponent 

{

}

