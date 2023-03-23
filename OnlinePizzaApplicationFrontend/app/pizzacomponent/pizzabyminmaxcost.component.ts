import { Component } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'pizza-type',
  template: `
  <div class="row row-cols-2">
  <div class="card"  style="width: 40rem;">
  <div class="card-body">
  <div *ngIf="resError" class="alert alert-danger"> 
  {{ resError?.error?.details }}
  </div>
  <div class="col-md-10">
  <form #newPizzaForm="ngForm" autocomplete="off" novalidate (ngSubmit)="getPizzaByCost(newPizzaForm.value)">
  <div class="form-group">
  <label for="minimumcost">Minimum cost</label>
  <input  id="minimumcost" type="number" onkeypress="return !(event.charCode == 46)" required [pattern] = "'^[1.00-9.00][0-9]*$'" class="form-control" name="minimumcost"  (ngModel)= pizza.minimumcost placeholder="Enter Minimum Cost" #mncost="ngModel">
  <div *ngIf="mncost.invalid && (mncost.dirty || mncost.touched)"
  class="alert">
  <em *ngIf="mncost.errors?.pattern">
  Cost can't be negative
  </em>
  <em *ngIf="mncost.errors?.required">
  cost is required.
  </em>
  </div> </div>
  <div class="form-group">
  <label for="maximum">Maximum  cost</label>
  <input  id="maximumcost" type="number" required [pattern] = "'^[1.00-9.00][0-9]*$'" class="form-control" name="maximumcost"  (ngModel)= pizza.maximumcost placeholder="Enter Maximum Cost" #mxcost="ngModel">
  <div *ngIf="mxcost.invalid && (mxcost.dirty || mxcost.touched)"
  class="alert">
  <em *ngIf="mxcost.errors?.pattern">
  Cost can't be negative
  </em>
  <em *ngIf="mxcost.errors?.required">
  cost is required.
  </em>
  </div> 
  </div>
 <button type="submit"  [disabled]=newPizzaForm.invalid class="btn btn-primary">Find Pizza </button>
 <div class="row row-cols-2"> 
<div *ngFor="let peezaa of peezaas" class="col-md-4">
  <h3>
  <div>Pizza Name : {{peezaa?.pizzaName | uppercase}} </div>
  </h3>
  <div>Pizza ID : {{peezaa?.pizzaId}} </div>
  <div>Pizza cost : {{peezaa?.pizzaCost | currency : 'INR' }} </div>
  <div>Pizza Type : {{peezaa?.pizzaType}} </div>
  <div>Pizza Description : {{peezaa?.pizzaDescription}} </div>
  <hr/>
  <br/> 
  </div>
  </div>
  </form>
  </div>    `,         
   
  styleUrls: ['./order.component.css'],
})
export class PizzaByCost {
  private resError;
  peezaa: Pizza = new Pizza(0, "", "", "", 0, 0, 0)

  private peezaas: Pizza[];
 

  constructor(private pizzaService: PizzaService) {

  }




  getPizzaByCost(pizza: Pizza) {
   
    console.log("inside pizza by cost component" + pizza.minimumcost)
    this.pizzaService.getPizzaByCost(pizza.minimumcost, pizza.maximumcost).subscribe((peezaa => this.peezaas = peezaa), (resError) => { this.resError = resError },)
   
  }


}




