import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { pipe } from "rxjs";
import { Pizza } from "../model/pizza.model";
import { PizzaService } from "../service/pizza.service";


@Component({
    selector: 'update-pizza',
    template:
    `
    <h2>Enter Pizza Details to Be Updated</h2>
    


    <div class="card"  style="width: 21rem;">
    <img class="card-img-top"
            src='/assets/images/pizzalist.jpg' >
  
    <div class="card-body">

    
  
    <div *ngIf = "alert" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Pizza Updated successfully</strong> 
    <button (click)="closeAlert()" type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>


   
    <form #newPizzaForm="ngForm" autocomplete="off" novalidate (ngSubmit)="updatePizza(newPizzaForm.value)">
        <!-- //The ng-submit directive specifies a function to run when the form is submitted. 
        I f the form does not have an action ng-submit will prevent the form from being submitted. -->
    
          <div class="form-group">
              <label for="id">Pizza Id</label>
              <em *ngIf="newPizzaForm.controls.pizzaId?.invalid && (newPizzaForm.controls.pizzaId?.touched)">Required</em>
               <input  id="id" type="number" required class="form-control" name="pizzaId"  readonly [(ngModel)]= pizza.pizzaId placeholder="Enter Pizza Id">
          </div>
    
    
          <div class="form-group">
                <label for="name">Pizza Name</label>
                 <input  id="name" type="text"  class="form-control" name="pizzaName"  [pattern]="'^[a-zA-Z]*$'" required  [(ngModel)]=pizzaName   placeholder="Enter Pizza Name"  #namee="ngModel">

                 <div *ngIf="namee.invalid && (namee.dirty || namee.touched)"
                     class="alert">

              <em *ngIf="namee.errors?.required">Name is required.</em>

              <em *ngIf="namee.errors?.pattern"> Please enter character only</em>

                
  </div></div>
 
  
              <div class="form-group">
              <label for="Cost">Pizza Cost</label>
              
               
              <input  id="Cost" type="number"  onkeypress="return !(event.charCode == 46)" required  [pattern] = "'^[1-9][0-9]*$'" max=99999999 class="form-control" name="pizzaCost" [(ngModel)]= pizzaCost placeholder="Enter Pizza Cost" #coste="ngModel" >
             
             
            
              <div *ngIf="coste.invalid && (coste.dirty || coste.touched)"
              class="alert">
              
              <em *ngIf="coste.errors?.pattern">
              Please Check the Cost given
            </em>
            <em *ngIf="coste.errors?.required">
              cost is required.
            </em>
            
           
            </div></div>             
         





            <div class="form-group">
            <label for="description">Pizza Description</label>
            
            <input  id="description" type="text" required minlength="5" class="form-control" name="pizzaDescription"  [(ngModel)]=pizzaDescription placeholder="Enter Description of Pizza" #desc="ngModel">
            <div *ngIf="desc.invalid && (desc.dirty ||desc.touched)"
            class="alert">
            <em *ngIf="desc.errors?.required">
            Description is required.
          </em>
  
          <em *ngIf="desc.errors?.minlength">
          Description must be at least 5 characters long.
        </em>
  
          </div>
    
          </div>
          <div class="form-group">
          <label for="pizzaType">    Pizza Type   </label>
          <select id="pizzaType" name="pizzaType"  ngModel class=pizzaType>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            
          </select>
        </div>
    
    
          <button type="submit"  [disabled]=newPizzaForm.invalid class="btn btn-primary">Save</button>
          <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
     <form>
    
    
     `,
    
      styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
},
)





export class UpdatePizzaComponent implements OnInit {
  alert : boolean= false

    pid : number
    pizza : Pizza ; 
  
    constructor(private router: Router, private pizzaService: PizzaService, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
     this.pizzaService.getPizzaById(+this.activatedRoute.snapshot.params['pid']).subscribe(pizza => this.pizza = pizza);
  
     
    }
  
    updatePizza(pizza){
      
         this.pizzaService.updatePizza(pizza).subscribe(pipe());
        //  this.router.navigate(['/pizza/adminpizzalist']);
         this.alert = true;
    }



    closeAlert(){
      this.alert=false
    }
  }