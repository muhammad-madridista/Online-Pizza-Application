import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PizzaOrder } from "../model/pizzaorder.model";
import { PizzaOrderService } from "../service/pizzaorder.service";

@Component({
    selector: 'createpizza',
    template: `<form [formGroup]="pizzaOrderForm" autocomplete = "off" novalidate (ngSubmit)="addPizza(pizzaOrderForm.value)">
                <div class="container">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputOrderId">BookingOrderId</label>
                        <em *ngIf="pizzaOrderForm.controls.bookingOrderId?.invalid && (pizzaOrderForm.controls.bookingOrderId?.touched)">Required</em> 
                        <input id="inputOrderId" type="number" class="form-control" formControlName="bookingOrderId" readonly  name = "bookingOrderId" placeholder="Auto generated id">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputorderDate">Date</label>
                        <em *ngIf="pizzaOrderForm.controls.orderDate?.invalid && (pizzaOrderForm.controls.orderDate?.touched)">Required</em>
                        <input id="inputorderDate" type="date"  min="{{minDate}}" max="{{maxDate}}" class="form-control" formControlName ="orderDate" required name = "orderDate" ngModel placeholder="Enter date">
                    </div>
                </div>
                <!--
                <div>
                <input type="date" min="{{minDate}}" max="{{maxDate}}">
                </div>    
-->
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputTransactionMode">transactionMode</label>
                    <em *ngIf="pizzaOrderForm.controls.transactionMode?.invalid && (pizzaOrderForm.controls.transactionMode?.touched)">Required</em> 
                    <select id ="inputTransactionMode" formControlName="size" class="form-control">
                    <option *ngFor="let trancmode of transaction">{{trancmode}}</option>
                    </select>
                    </div>
                     <div class="form-group col-md-6">
                    <label for="inputQuantity">Quantity</label>
                    <em *ngIf="pizzaOrderForm.controls.quantity?.invalid && (pizzaOrderForm.controls.quantity?.touched)">Required</em> 
                    <input id="inputQuantity" type="number" class="form-control" formControlName="quantity"  required min="1" onkeypress="return !(event.charCode == 46)" step="1"name = "quantity" ngModel placeholder="enter the no of quantity">
                    </div>
                </div>
                 <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputSize">Size</label>
                        <em *ngIf="pizzaOrderForm.controls.size?.invalid && (pizzaOrderForm.controls.size?.touched)">Required</em> 
                        <select id ="inputSize" formControlName="size" class="form-control">
                        <option *ngFor="let psize of pizzasize">{{psize}}</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputTotalCost">TotalCost</label>
                        <em *ngIf="pizzaOrderForm.controls.totalCost?.invalid && (pizzaOrderForm.controls.totalCost?.touched)">Required</em> 
                        <input id="inputTotalCost" type="number" required minlength="4" class="form-control"  formControlName="totalCost" required name = "totalCost" ngModel placeholder="enter cost ">
                    </div>
                </div>
                <div formGroupName="order">
                <div class="form-row" >
                    <div class="form-group col-md-6">
                    <label for="inputOrderId">orderId</label>
                    <em *ngIf="pizzaOrderForm.controls.orderId?.invalid && (pizzaOrderForm.controls.orderId?.touched)">Required</em> 
                    <input id="inputOrderId" type="number" class="form-control" formControlName="orderId"  required name = "orderId"  placeholder="enter order id">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputorderType">orderType</label>
                        <em *ngIf="pizzaOrderForm.controls.orderType?.invalid && (pizzaOrderForm.controls.orderType?.touched)">Required</em> 
                        <input id="inputorderType" type="text" class="form-control" formControlName="orderType"  required name = "orderType"  placeholder="enter order type">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6" >
                    <label for="inputorderDescription">Order Description </label>
                    <em *ngIf="pizzaOrderForm.controls.orderDescription?.invalid && (pizzaOrderForm.controls.orderDescription?.touched)r">Required</em> 
                    <input id="inputorderDescription" type="text" class="form-control" formControlName="orderDescription"  required name = "orderDescription"  placeholder="enter desc">                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputCustomerId">Customer Id</label>
                    <em *ngIf="pizzaOrderForm.controls.orderCustomerId?.invalid && (pizzaOrderForm.controls.orderCustomerId?.touched)">Required</em> 
                    <input  id="inputCustomerId"  type="number" class="form-control"required formControlName="orderCustomerId" name = "orderCustomerId"  placeholder="enter customer id">
                    </div>
                </div>
                </div>
                    <button type="submit" [disabled] = pizzaOrderForm.invalid class="btn btn-primary">Save</button>
                </div>
                </form>`,
    styles: ['em{float:right; color:blue;text--color:white; padding-left-10px;}']

})

export class CreatePizzaOrderComponent {
    pizzasize: any = ['small', 'medium', 'large']
    transaction:any=['card','wallet']
    minDate :any = "2021-06-15";
    maxDate :any = "2021-06-15";

    pizza: PizzaOrder = new PizzaOrder();

    pizzaOrderForm = new FormGroup({
        bookingOrderId: new FormControl(this.pizza.bookingOrderId),
        orderDate: new FormControl(this.pizza.orderDate),
        transactionMode: new FormControl(this.pizza.transactionMode,[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
        quantity: new FormControl(this.pizza.quantity),
        size: new FormControl(this.pizza.size),
        totalCost: new FormControl(this.pizza.totalCost),
        order: new FormGroup({
            orderId: new FormControl(''),
            orderType: new FormControl(''),
            orderDescription: new FormControl('',Validators.required),
            orderCustomerId: new FormControl('')
        })
    });

    constructor(private router: Router, private pizzaService: PizzaOrderService) {

    }
    addPizza(newpizza: PizzaOrder) {
        this.pizzaService.addPizza(newpizza).subscribe(pizzalist => this.pizza = pizzalist);
        console.log(newpizza)
        this.router.navigate(['/pizzaorder'])
        console.log(newpizza)
        // console.log(newpizza.orderCustomerId);

    }
}