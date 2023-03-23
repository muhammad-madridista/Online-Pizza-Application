import { group } from "@angular/animations";
import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Coupan } from "../model/coupan.model";
import { PizzaOrder } from "../model/pizzaorder.model";
import { CoupanService } from "../service/coupan.service";
import { PizzaOrderService } from "../service/pizzaorder.service";

@Component({
    selector: 'book-pizza-order',

    template: `
                        <div class="col-md-5">
                        <div class="container md-8">
                            <br>
                            <div style="card-align: center;">
                            <div class="card" style="width: 45rem;">
                            <div class="card-body">
                    <form [formGroup]="pizzaOrderForm" autocomplete = "off" novalidate (ngSubmit)="addPizza(pizzaOrderForm.value)">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputorderDate">Date</label>
                        <input id="inputorderDate" type="date"  min="{{minDate}}" max="{{maxDate}}" class="form-control" formControlName ="orderDate" required name = "orderDate" ngModel placeholder="Enter date">
                        <span *ngIf ="pizzaOrderForm.get('orderDate').touched && pizzaOrderForm.get('orderDate').hasError('required')">Enter the date </span>
                    </div>
                
                    <div class="form-group col-md-6">
                    <label for="inputTransactionMode">transactionMode</label>
                    <select id ="inputTransactionMode" formControlName="inputTransactionMode" class="form-control">
                    <option *ngFor="let transc of tracnsaction">{{transc}}</option>
                    </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputQuantity">Quantity</label>
                        <input id="inputQuantity" type="number" class="form-control" formControlName="quantity"  required onkeypress="return !(event.charCode == 46)" name = "quantity"  placeholder="enter the no of quantity">
                        <span *ngIf ="pizzaOrderForm.get('quantity').touched && pizzaOrderForm.get('quantity').hasError('required')">Quantity required</span>
                        <span *ngIf ="pizzaOrderForm.get('quantity').touched && pizzaOrderForm.get('quantity').hasError('min')">Enter correct value .Please enter value greater than 0</span>
                        <span *ngIf ="pizzaOrderForm.get('quantity').touched && pizzaOrderForm.get('quantity').hasError('max')">enter quantity less than 100</span>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputSize">Size </label>
                        <select id ="inputSize" formControlName="size" class="form-control">
                        <option *ngFor="let psize of pizzasize">{{psize}}</option>
                        </select>
                    </div>
                </div>
                <div formGroupName="order">
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <label for="inputorderType">orderType</label>
                        <input id="inputorderType" type="text" class="form-control" formControlName="orderType"  required name = "orderType"  placeholder="enter order type">
                        <span *ngIf ="pizzaOrderForm.get('order.orderType').touched && pizzaOrderForm.get('order.orderType').hasError('required')">Required</span>
                        <span *ngIf ="pizzaOrderForm.get('order.orderType').touched && pizzaOrderForm.get('order.orderType').hasError('minLength')">Order type minimum of 5 characters required</span>
                        </div>
                    <div class="form-group col-md-6">
                        <label for="inputorderDescription">Order Description </label>
                        <input id="inputorderDescription" type="text" class="form-control" formControlName="orderDescription"  required name = "orderDescription"  placeholder="enter desc">
                        <span *ngIf ="pizzaOrderForm.get('order.orderDescription').touched && pizzaOrderForm.get('order.orderDescription').hasError('minLength')">Five minimum 5 characters</span>
                        <span *ngIf ="pizzaOrderForm.get('order.orderDescription').touched && pizzaOrderForm.get('order.orderDescription').hasError('required')">description required</span>
                    </div>
                    <!--
                    <div class="form-group col-md-6">
                        <label for="inputCustomerId">Customer Id</label>
                        <input  id="inputCustomerId"  type="number" class="form-control"required formControlName="orderCustomerId" name = "orderCustomerId"  placeholder="enter customer id">
                    </div> -->
                </div>
                </div>
                <div class="form-row" >
                        <div class="form-group col-md-6">
                        <label for="coupanID">Coupan id</label>
                        <select id ="coupanID" formControlName="coupanId" class="form-control" (change)="calculate($event.target.value)">
                        <option *ngFor="let coupan of coupans">{{coupan?.coupanId}}</option>
                        </select>
                         </div>

                </div>
                <div formArrayName="pizzaSet" *ngFor="let pizza of pizzaOrderForm.get('pizzaSet')['controls']; let i = index;">
                 <div [formGroupName]="i"> 
                <div class="form-row" >
                    <div class="form-group col-md-6">
                    <label for="pizzaId">Pizza Id</label>
                    <em *ngIf="pizzaOrderForm.controls.pizzaId?.invalid && (pizzaOrderForm.controls.pizzaId?.touched)">Required</em> 
                    <input id="pizzaId" type="number" class="form-control" formControlName="pizzaId" readonly  required  name = "pizzaId"  placeholder="enter pizza id">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="pizzaType">Pizza Type</label>
                        <em *ngIf="pizzaOrderForm.controls.pizzaType?.invalid && (pizzaOrderForm.controls.pizzaType?.touched)">Required</em> 
                        <input id="pizzaType" type="text" class="form-control" formControlName="pizzaType" readonly required  name = "pizzaType"  placeholder="enter pizza type">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="pizzaName">Pizza Name </label>
                    <em *ngIf="pizzaOrderForm.controls.pizzaName?.invalid && (pizzaOrderForm.controls.pizzaName?.touched)">Required</em> 
                    <input id="pizzaName" type="text" class="form-control" formControlName="pizzaName" readonly required  name = "pizzaName"  placeholder="enter Pizza name">
                    </div>
                    <div class="form-group col-md-6">
                    <label for="pizzaDescription">Pizza Description</label>
                    <em *ngIf="pizzaOrderForm.controls.pizzaDescription?.invalid && (pizzaOrderForm.controls.pizzaDescription?.touched)">Required</em> 
                    <input  id="pizzaDescription"  type="text" class="form-control"required readonly formControlName="pizzaDescription" name = "pizzaDescription"  placeholder="enterPizza Desc">
                    </div>
                    <div class="form-group col-md-6">
                    <label for="pizzaCost">Pizza Cost</label>
                    <em *ngIf="pizzaOrderForm.controls.pizzaCost?.invalid && (pizzaOrderForm.controls.pizzaCost?.touched)">Required</em> 
                    <input  id="pizzaCost"  type="number" class="form-control"required readonly formControlName="pizzaCost" name = "pizzaCost"  placeholder="Enter Pizza Cost">
                    </div>
                </div>
                </div>
                </div>
                    <button type="submit" [disabled] = pizzaOrderForm.invalid class="btn btn-primary">Save</button>

                </form>`,
                styleUrls: ['./bookpizzaorder.component.css']
})

export class BookPizzaOrderComponent {
    pizzasize: any = ['small', 'medium', 'large']
    tracnsaction :any =['online','cash','wallet']
    minDate :any = "2021-06-18";
    // maxDate :any = "2021-06-15";
    pizzaOrder: PizzaOrder;
    pizzaOrderForm: FormGroup
    pizzaSet: FormArray;
    coupans:Coupan[]
    coupandisc :number;
    constructor(private pizzaService: PizzaOrderService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,private coupanService :CoupanService) {
        this.router.getCurrentNavigation().extras.state;
    }

    ngOnInit(): void {

        this.coupanService.viewCoupans().subscribe(coupan =>this.coupans = coupan);
        this.pizzaOrderForm = this.formBuilder.group({
            // bookingOrderId: new FormControl(history.state.bookingOrderId),
            orderDate: new FormControl(null),
            transactionMode: new FormControl(null),
            quantity: new FormControl(history.state.quantity,[Validators.required,Validators.min(1),Validators.max(100)]),
            size: new FormControl(history.state.size),
            totalCost: new FormControl(null),

            order: new FormGroup
                ({
                     orderId: new FormControl(),
                    orderType: new FormControl(null,[Validators.required,Validators.minLength(4)]),
                    orderDescription: new FormControl(null, [Validators.required,Validators.minLength(4)]),
                    orderCustomerId: new FormControl(null)
                }),
            // coupan : new FormGroup
            // ({
            //     coupanID : new FormControl(this.coupans)
            // }),
            
        
            pizzaSet: this.formBuilder.array([this.createPizzaSet()])
        })
    }


    get orderDescription() { return this.pizzaOrderForm.get('orderDescription'); }


    
    createPizzaSet(): FormGroup {
        return this.formBuilder.group({
            pizzaId: new FormControl(history.state.pizzaId),
            pizzaType: new FormControl(history.state.pizzaType),
            pizzaName: new FormControl(history.state.pizzaName),
            pizzaDescription: new FormControl(history.state.pizzaDescription),
            pizzaCost: new FormControl(history.state.pizzaCost)
        });
    }
    addPizza(newpizza: PizzaOrder) {
        console.log("printing my obj" + JSON.stringify(newpizza))
        newpizza.bookingOrderId = 200
        newpizza.order.orderId =124
        alert("Do you want to book thid pizza"+JSON.stringify(newpizza.pizzaSet));

        document.getElementById('coupanID')
         this.pizzaService.addPizza(newpizza).subscribe(pizzalist => this.pizzaOrder = pizzalist);

          this.router.navigate(['/userpage/pizzaorder/all'])


    }

        calculate(coupanId:number)
         {
            console.log("********"+coupanId)
            this.coupans.filter(coupan=>coupan.coupanId==coupanId).map(coupan =>this.coupandisc =coupan.coupanDiscount)
            console.log(this.coupandisc)
   
        }
    
}


//                 console.log(history.state)
                        //                 this.pizzaOrderForm = new FormGroup 
                        //    ({
                        //                     bookingOrderId : new FormControl(history.state.bookingOrderId),
                        //                     orderDate :new FormControl(null),
                        //                     transactionMode : new FormControl(null),
                        //                     quantity : new FormControl(history.state.quantity),
                        //                     size : new FormControl(history.state.size),
                        //                     totalCost : new FormControl(null),

                        //                     order : new FormGroup
                        //        ({
                        //                         orderId: new FormControl(null),
                        //                         orderType: new FormControl(null),
                        //                         orderDescription: new FormControl(null),
                        //                         orderCustomerId: new FormControl(null)
                        //         }),   

                        //         pizzaSet : new FormGroup 
                        //         ({   
                        //                                 pizzaId :  new FormControl( history.state.pizzaId),
                        //                                 pizzaType :  new FormControl(history.state.pizzaType),
                        //                                 pizzaName :  new FormControl(history.state.pizzaName),
                        //                                 pizzaDescription :  new FormControl(history.state.pizzaDescription),
                        //                                 pizzaCost :  new FormControl(history.state.pizzaCost)


                        //         }) 
                        //     });

                        // });