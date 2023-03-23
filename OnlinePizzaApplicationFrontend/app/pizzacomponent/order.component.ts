import { Component, Input, Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'order',

  

  styleUrls: ['./order.component.css'],



  templateUrl: './order.component.html',

})
export class OrderComponent {

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
this.router.navigateByUrl("/userpage/pizzaorder/bookpizza", { state: { pizzaId:pizId ,pizzaType:pizType,pizzaName:pizName, pizzaDescription:pizDescription,pizzaCost:pizCost}});

//whatever you sent get stored ny feault in one js variasble '$event'
console.log(this.pizzadata);

}

UpdatePizza(){
  this.customEvent.emit("Pizza selected for updating"); 
  console.log("in updatePizza of order component");

}


}


//<div>  Pizza Image : <img src ={{pizzadata.ImageUrl}}> </div>