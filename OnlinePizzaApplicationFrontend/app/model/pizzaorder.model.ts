import { Order } from "./order.model";
import { Pizza } from "./pizza.model";

export class PizzaOrder
{
    
    bookingOrderId: number
    orderDate: Date
    transactionMode:string
    quantity: number
    size: string
    totalCost: number
    order?:Order
    pizzaSet?:Pizza
    
    
 
    
    
   
}
