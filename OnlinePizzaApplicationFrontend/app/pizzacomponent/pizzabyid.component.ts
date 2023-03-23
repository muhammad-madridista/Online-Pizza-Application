import { Component } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
  selector: 'pizza-id',
  template: `<br/><br/>
  <div class="card"  style="width: 21rem;">
  <img class="card-img-top"
          src='/assets/images/pizzalist.jpg' >

  <div class="card-body">

  
  <div *ngIf="resError" class="alert alert-danger"> 
  {{ resError?.error?.details }}
  </div>



      <form #newPizzaForm="ngForm" autocomplete="off" novalidate (ngSubmit)=" findPizza(newPizzaForm.value); ">

      <div class="form-group">
            <label for="id">Pizza Id</label>
            <input  id="id" type="number" onkeypress="return !(event.charCode == 46)" required  [pattern] = "'^[1-9][0-9]*$'" class="form-control" name="pizzaId"   [(ngModel)]= pizzaId placeholder="Enter Pizza Id" #idd="ngModel">
            <div *ngIf="idd.invalid && (idd.dirty || idd.touched)"class="alert">
            
                    <em *ngIf="idd.errors?.required">Pizza Id is required.   </em>
                    em *ngIf="idd.errors?.pattern">Please Check the Pizza Id<
       </div>

           <button type="submit"  [disabled]=newPizzaForm.invalid class="btn btn-primary">Find Pizza </button>
         


           
                 <h3>  <div>Pizza Name : {{peezaa?.pizzaName | uppercase}} </div> </h3>
  
                  <div>Pizza ID : {{peezaa?.pizzaId}} </div>
                  <div>Pizza cost : {{peezaa?.pizzaCost | currency : 'INR' }} </div>
                  <div>Pizza Type : {{peezaa?.pizzaType}} </div>
                        <div>Pizza Description : {{peezaa?.pizzaDescription}} </div></div>



          
           </form>
          
          
           `,

  styles: [`input.ng-touched.ng-invalid{

            border:1px solid red
        }`]

})

export class PizzaByIdcomponent {
  private resError;
  peezaa: Pizza



  constructor(private router: Router, private pizzaService: PizzaService) {
  }






  findPizza(pizza: Pizza) {

    this.pizzaService.getPizzaById(pizza.pizzaId).subscribe((c => this.peezaa = c), (resError) => { this.resError = resError },)

    console.log("Pizza Id component method is called")

  }




}





