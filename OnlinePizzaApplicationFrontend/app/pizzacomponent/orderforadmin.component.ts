import { Component, Input, Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'order-admin',
  template: `<div>

  <div class="card"  style="width: 21rem;">
  <img class="card-img-top"
          src='/assets/images/pizzalist.jpg' >

  <div class="card-body">

          <!-- <div   [routerLink]="['/pizzaById']" > -->

          <body>

                  <ul class="list-group list-group-flush">
                          <b>
                                  <li class="list-group-item"> Pizza Name : {{pizzadata?.pizzaName
                                          | uppercase}}</li>
                                  </b>

                          <li class="list-group-item"> Pizza ID : {{pizzadata?.pizzaId}}</li>
                          <li class="list-group-item"> Pizza cost : {{pizzadata?.pizzaCost |
                                  currency : 'INR' }} </li>
                          <li class="list-group-item"> Type : {{pizzadata?.pizzaType}} </li>
                          <li class="list-group-item"> Description :
                                  {{pizzadata?.pizzaDescription}}</li>

                  </ul>
          </body>









          <div> 
                    <button [class]=buttonStyle (click)="UpdatePizza(pizzadata.pizzaId)"> Update </button>
         &nbsp;
         &nbsp;&nbsp;&nbsp;
                    <button [class]=buttonStyle (click)="DeletePizza(pizzadata.pizzaId)"> Delete </button>
           </div>


          
  </div>

</div>`



})
export class OrderForAdminComponent {

  constructor(private router: Router) {
  }



 @Input() pizzadata;

 @Output() customEvent = new EventEmitter();

  isDisabled = true;
 buttonStyle = "btn btn-primary";

myfunction(){
   this.isDisabled = false;
    this.buttonStyle = "btn btn-success";
}

onButtonClick(pizId: number,pizType : string,pizName : string,pizDescription : string, pizCost : number){
this.customEvent.emit("Pizza selected");        
this.router.navigateByUrl("/pizzaorder/bookpizza", { state: { pizzaId:pizId ,pizzaType:pizType,pizzaName:pizName, pizzaDescription:pizDescription,pizzaCost:pizCost}});

console.log(this.pizzadata);

}

UpdatePizza(pid : number){
    




    console.log("in updatePizza of order component");
  this.router.navigateByUrl("/adminpage/pizza/updatepizza/"+pid)
  }



  DeletePizza(pid : number){
    




    console.log("in deletePizza of order component");
  this.router.navigateByUrl("/adminpage/pizza/deletepizza/"+pid)
  }  

}


