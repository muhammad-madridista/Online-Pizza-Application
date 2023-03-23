import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'add-pizza',
  styleUrls: ['./addpizza.component.css'],
  template: `
  

  <h2>Enter Pizza Details</h2>
  
          <div *ngIf = "alert" class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Pizza Updated Successfully</strong> 
          <button (click)="closeAlert()" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
  

        <div class="col-md-6">
  <div class="container">
  <br>
  <div style="card-align: center;">
           <div class="card" style="width: 40rem;">
          
           <div class="card-body">
  
  
  
  
  
   
<form #newPizzaForm="ngForm" autocomplete="off" novalidate (ngSubmit)="addPizza(newPizzaForm.value)">
   

      <div class="form-group">
      <label for="id">Pizza Id</label>
      <input  id="id" type="number" onkeypress="return !(event.charCode == 46)"  readonly  [pattern] = "'^[1-9][0-9]*$'" class="form-control" name="pizzaId"   [(ngModel)]= pizzaId placeholder="Pizza Id Auto Generated" #idd="ngModel">
      <div *ngIf="idd.invalid && (idd.dirty || idd.touched)"
    class="alert">
    <em *ngIf="idd.errors?.required">
    Pizza Id is required.
  </em>
  <em *ngIf="idd.errors?.pattern">Id Cant be negative
  </em>
     </div>
         </div>

      <div class="form-group">
      <label for="name">Pizza Name</label>
      <input  id="name" type="text"  class="form-control" name="pizzaName" required [pattern]="'^[a-zA-Z]*$'" [(ngModel)]=pizzaName   placeholder="Enter Pizza Name"  #namee="ngModel">

      <div *ngIf="namee.invalid && (namee.dirty || namee.touched)"
    class="alert">

  <em *ngIf="namee.errors?.required">
    Name is required.
  </em>
  
  <em *ngIf="namee.errors?.pattern"> Please enter character only</em>
 
  
  </div></div>
                          
        
      <div class="form-group">
          <label for="Cost">Pizza Cost</label>
          
           
          <input  id="Cost" type="number"  onkeypress="return !(event.charCode == 46)" required   [pattern] = "'^[1-9][0-9]*$'" max=99999999 class="form-control" name="pizzaCost" [(ngModel)]= pizzaCost placeholder="Enter Pizza Cost" #coste="ngModel" >
         
         
        
          <div *ngIf="coste.invalid && (coste.dirty || coste.touched)"
          class="alert">
          
          <em *ngIf="coste.errors?.pattern">
          Please Check the Cost given
        </em>
        <em *ngIf="coste.errors?.required">
          Cost is required.
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
        Description must be at least 4 characters long.
      </em>

        </div>





      </div>
      <div class="form-group">
      <label for="pizzaType">    Pizza Type   </label>
      <select id="pizzaType" name="pizzaType" required  ngModel class=pizza.pizzaType>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
        
      </select>
    </div>
   
   
   
   
   

      <button type="submit"  [disabled]=newPizzaForm.invalid class="btn btn-primary">Save</button>
      &nbsp;  &nbsp; &nbsp;
      <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
 <form>
  

 `,

  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']

})
export class AddPizzaComponent {
  alert: boolean = false

  pizza: Pizza


  constructor(private router: Router, private pizzaService: PizzaService) {
  }


  addPizza(newpizza: Pizza) {
    this.pizzaService.addPizza(newpizza).subscribe(course => this.pizza = course);

    console.log(newpizza)
    this.alert = true;


  }


  cancel() {
    this.router.navigate(['/pizzalist'])
  }

  closeAlert() {
    this.alert = false
  }


}






