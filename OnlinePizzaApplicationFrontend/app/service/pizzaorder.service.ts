import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { PizzaOrder } from "../model/pizzaorder.model";


@Injectable()
export class PizzaOrderService
{
   

  
  private url : string = "http://localhost:9999/pizzaorder" 
  private urldate :string ="http://localhost:9999/pizzaorder/date"
   private urlup : string = "http://localhost:9999/pizzaorder/cost" 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 

  
  constructor(private httpClient : HttpClient)
  {

  }
  public getAllPizzas():Observable<PizzaOrder[]>
  {
    // let obs : Observable<PizzaOrder[]> =  this.httpClient.get<PizzaOrder[]>(this.url);
    return this.httpClient.get<PizzaOrder[]>(this.url);
    // return this.httpClient.get<Course[]>(this.url);
    
  }

 public  getPizzaById(pizzaId : number):Observable<PizzaOrder>
  {
    console.log(pizzaId);
    // return pizzaOrders.find(pizza => pizza.bookingOrderId === pizzaId)
    const baseurl = `${this.url}/${pizzaId}`;
    return this.httpClient.get<PizzaOrder>(baseurl) ;
  }
  
  public getPizzaOrderByDate(date : Date):Observable<PizzaOrder[]>
  {
    console.log("in service of order date")
    const urldt = `${this.urldate}/${date}`;
    console.log("In "+date)
    console.log(urldt);
    console.log("in service method order by date")
    return this.httpClient.get<PizzaOrder[]>(urldt);
  }

    public addPizza(newpizza):Observable<PizzaOrder>
    {
       console.log("In service of pizza Order"+newpizza);
       console.log("In add of service"+this.httpClient.post<PizzaOrder>(this.url ,newpizza,this.httpOptions))
        return this.httpClient.post<PizzaOrder>(this.url ,newpizza,this.httpOptions);
    }

    public deletePizza(pizId:number):Observable<any>
    {
      const delurl = `${this.url}/${pizId}`;
        return this.httpClient.delete<any>(delurl) ;
    }


    public updatePizza(pizzaId :number,pizza:PizzaOrder): Observable<PizzaOrder> {
      console.log("in service update method")
      console.log("*********"+JSON.stringify(pizza))
        const urlpost= `${this.url}/${pizzaId}`;
      return this.httpClient.put<PizzaOrder>(urlpost, pizza, this.httpOptions);
    }
    public getPizzaOrderByCost(pizzaId :number,size:string,quantity: number,pizza:PizzaOrder):Observable<PizzaOrder>
    {
      
      const urlpost= `${this.urlup}/${pizzaId}/${size}/${quantity}`;
      console.log("In service of "+size);
       console.log("*********"+JSON.stringify(pizza));
      // console.log("In service of "+pizzaId);
      console.log( "In service url "+this.httpClient.patch<PizzaOrder>(urlpost, pizza, this.httpOptions));
      return this.httpClient.patch<PizzaOrder>(urlpost, pizza, this.httpOptions);
      
    }   
  
}

//  const pizzaOrders : PizzaOrder[] =[ {
//   bookingOrderId: 1,
//   orderDate: "2020-12-15",
//   transactionMode: "cash",
//   quantity: 3,
//   size: "small",
//   totalCost: 500,
//   imageUrl : "assets/images/pizza.jpg",
//   order: {
//     orderId: 123,
//     orderType: "online",
//     orderDescription: "Ordered Pizza",
//     orderCustomerId: 101
//          }
// },
// {
//   bookingOrderId : 102,
//   transactionMode :'cash',
//   quantity :4,
//   size : 'medium',
//   totalCost: 500,
//   orderDate : '2021-05-27', 
// },
// { bookingOrderId : 103,
//   transactionMode :'online',
//   quantity :2,
//   size : 'medium',
//   orderDate : '2021-05-28', 
//   totalCost : 600,
// },
// { bookingOrderId : 104,
//   transactionMode :'cash',
//   quantity :3,
//   size : 'small',
//   orderDate : '2021-05-29',
//   totalCost : 400,
// },
// {
//   bookingOrderId: 14,
//   orderDate: '2021-05-15',
//   transactionMode: 'string',
//   quantity: 3,
//   size: 'small',
//   totalCost: 500,
//   order: {
//     orderId:10 ,
//     orderType: 'online',
//     orderDescription: 'Pizza Ordered',
//     orderCustomerId: 102
//   }
// }
// ]
