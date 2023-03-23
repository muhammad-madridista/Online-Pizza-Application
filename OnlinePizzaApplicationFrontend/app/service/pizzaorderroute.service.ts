import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import { PizzaOrderService } from "./pizzaorder.service";



@Injectable()
export class PizzaOrderRouteActivateService implements CanActivate
{
  
  
    pId :number;  
    constructor(private pizzaService : PizzaOrderService, private router:Router)
    {
      
    }
    canActivate(route: ActivatedRouteSnapshot)
    {
      console.log(this.pId)
        console.log(+route.params['pizzaId'])
        this.pizzaService.getPizzaById(+route.params['pizzaId']).subscribe(pizzaExists => this.pId = pizzaExists.bookingOrderId)
        console.log(this.pId)
        console.log(+route.params['pizzaId'])
        if(!this.pId)
          this.router.navigate(['/pizzaordernotfound']);
         return true;
        
        
    }
  
   

}



