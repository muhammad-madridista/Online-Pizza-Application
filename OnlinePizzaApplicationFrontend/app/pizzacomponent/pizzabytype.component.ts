import { Component } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'pizza-type',

  styleUrls: ['./order.component.css'],
  template: `
  
  <div class="row row-cols-2">
  <div class="card"  style="width: 35rem;">
                       

                        <div class="card-body">

  
  <form #newPizzaForm="ngForm" autocomplete="off" novalidate (ngSubmit)="getPizzaByType(newPizzaForm.value)">
        <div class="form-group">
         
        <div class="form-group">
      <label for="pizzaType">Pizza Type</label>
      <select id="pizzaType" name="pizzaType" required ngModel class=pizza.pizzaType>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
        
      </select>
    </div>
          
           <button type="submit"  [disabled]=newPizzaForm.invalid class="btn btn-primary">Find Pizza </button>
           

           <div class="row row-cols-4"> 
           <div *ngFor="let peezaa of peezaas" class="col-md-5">
           
           <h3>
            <div>Pizza Name : {{peezaa?.pizzaName | uppercase}} </div>
             </h3>

            <div>Pizza ID : {{peezaa?.pizzaId}} </div>
            <div>Pizza cost : {{peezaa?.pizzaCost | currency : 'INR' }} </div>
            <div>Pizza Type : {{peezaa?.pizzaType}} </div>
            <div>Pizza Description : {{peezaa?.pizzaDescription}} </div>
            </div>
            </div>



           </div>
           </form>
           <br/>
           <br/>
           <br/>

           <div>         
                     
           `,          //property binding
})
export class PizzaByTypecomponent {

  //peezaa : Pizza= new Pizza(0,"","","",0)
  
  private peezaas : Pizza[];
  
 
  constructor(private pizzaService: PizzaService) {
    
  }
     

        

     getPizzaByType(pizza : Pizza){


     this.pizzaService.getPizzaByType(pizza.pizzaType).subscribe(peezaa => this.peezaas = peezaa);

    
     console.log("by pizza type component")
}


}

// <div [ngSwitch]="pizza?.type">
// Type : {{pizzadata?.type}}<span *ngSwitchCase="'veg'"> (Tasty Veg pizza)</span>
//                           <span *ngSwitchDefault>(different type pizza)</span>
// </div>

// <div>Image :<img [src]= pizza?.ImageUrl/>  </div>









// <div class="form-group">
//       <label for="pizzaType">Pizza Type</label>
//       <select id="pizzaType" name="pizzaType"  ngModel class=pizza.pizzaType>
//         <option value="Veg">Veg</option>
//         <option value="Non-Veg">Non-Veg</option>
        
//       </select>
//     </div>