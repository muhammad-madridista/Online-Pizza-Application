import { Component } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
  selector: 'findpizza',
  template: `<div class="col-md-6">
  <form #newPizzaForm="ngForm" autocomplete="off" novalidate (ngSubmit)="findPizza(newPizzaForm.value)">
        <div class="form-group">
          <label for="id">Pizza Id</label>
          <em *ngIf="newPizzaForm.controls.pizzaId?.invalid && (newPizzaForm.controls.pizzaId?.touched)">Required</em>
           <input  id="id" type="number" required class="form-control" name="pizzaId"  (ngModel)= pizza.pizzaId placeholder="Enter Pizza Id">
          
           <button type="submit"  [disabled]=newPizzaForm.invalid class="btn btn-primary">Find Pizza </button>

           </div>
           
           <br/>
           <br/>
           <br/>

           <div>`
   



           
           
           
           
           ,
  
   
  
  })

  export class FindPizzaComponent {
 
    peezaa : Pizza = new Pizza(0,"","","",0)

    
      constructor(private router: Router, private pizzaService: PizzaService) {
     }   
    
       findPizza(pizza : Pizza) {
       this.pizzaService.getPizzaById(pizza.pizzaId).subscribe(c => this.peezaa =c)
       this.router.navigate(['/pizzalist'])
       console.log("Pizza Id component method is called")
       
   }
 
       
 
 
 }
  



