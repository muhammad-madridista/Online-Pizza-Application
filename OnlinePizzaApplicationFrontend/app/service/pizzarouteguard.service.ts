import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { PizzaService } from "./pizza.service";


@Injectable()
export class PizzaIdRouteGuardService implements CanActivate {
  pizzaid: number;
  
   
  constructor(private pizzaService : PizzaService , private router : Router){

  }
  canActivate(route: ActivatedRouteSnapshot) {
     

    // console.log("Route guard is called")
    //activate route when true returned other wise don't activate the url
    
    this.pizzaService.getPizzaById(+route.params['pid']).subscribe(pizzaExists => this.pizzaid = pizzaExists.pizzaId )
    console.log(this.pizzaid)
    
    
    if(!this.pizzaid)
    {
    this.router.navigate(['/pizzanotfound']);
    } 
      
      else
       return true;


  }



}

