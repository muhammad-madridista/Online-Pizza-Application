import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../service/pizza.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'delete-course',
  template: ` `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},



)
export class DeletePizzaComponent implements OnInit {


  constructor(private router: Router, private pizzaService: PizzaService, private activatedRoute: ActivatedRoute) {
  }
  
  
  ngOnInit(): void {
    let pizzaid: number = this.activatedRoute.snapshot.params['pid'];
    console.log(pizzaid);
    if(confirm("Are you Sure you want to Delete this Pizza?")){
    this.pizzaService.deletePizzaById(pizzaid).subscribe(data => console.log(data));
   alert("Pizza deleted successfully");
    // this.router.navigate(['/pizza/adminpizzalist']);
  }
}
}
  
    



