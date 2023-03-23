import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { Customer } from "../model/customer.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable()

export class CustomerService {
    
  
  
  private url : string = "http://localhost:9999/customer" 
  private urd : string = "http://localhost:9999/customer"
  private ure : string = "http://localhost:9999/customer"
  private urf : string = "http://localhost:9999/customer"
  private urg : string = "http://localhost:9999/customer"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient : HttpClient)
  {
}
  public getAllCustomer() : Observable<Customer[]> {
    // return Pizzas;
    return this.httpClient.get<Customer[]>(this.url);
       // let obs  ,return obs
 }
 getCustomerById(customerId : number){
  {
    console.log(customerId);
    // return pizzaOrders.find(pizza => pizza.bookingOrderId === pizzaId)
    const baseurl = `${this.urf}/${customerId}`;
    return this.httpClient.get<Customer>(baseurl) ;
  }
}
//  public getCustomerById(cid : number) :Observable<Customer>  {
//   //return Customer.find(Pizza => Pizza.id == pid)
//   console.log("coming in serevice pizza by Id")

//   const url = `${this.urf}/${cid}`;
//   return this.httpClient.get<Customer>(url);


// }

  // getCustomerById(arg0: number) {
  //   throw new Error("Method not implemented.");
  // }
    // updateCustomer(customer: any) {
    //     throw new Error("Method not implemented.");
    //}
    public deleteCustomerById(cid : number) :Observable<Customer>  {
      // return Pizzas.find(Pizza => Pizza.id == pid)
         console.log("comccing in serevice delete")
      const url = `${this.urd}/${cid}`;
      return this.httpClient.delete<Customer>(url);      //<any>(url)


   }
   public addCustomer(customer:Customer):Observable<Customer> {


      return this.httpClient.post<Customer>(this.ure, customer, this.httpOptions);
  }
   
   
  //   public getAllCustomer():Observable<Customer[]>
  // {
  //   let obs : Observable<Customer[]> =  this.httpClient.get<Customer[]>(this.url);
  //   return this.httpClient.get<Customer[]>(this.url);
  //   // return this.httpClient.get<Course[]>(this.url);
    
  // }
  
  // public updateCustomer(customer : Customer):Observable<Customer> {
  //   const ull = `${this.urg}/${customer.customerId}`;
  //   console.log("coming in update customer service")
  //   return this.httpClient.put<Customer>(ull, customer, this.httpOptions); 
  // }

  public updateCustomer(newCustomer : Customer):Observable<Customer> {
    const ull = `${this.url}/${newCustomer.customerId}`;
    console.log(newCustomer.customerId)
    return this.httpClient.put<Customer>(ull, newCustomer, this.httpOptions); 
  }
  // public addCustomers(newCustomer):Observable<Customer> {
  //   console.log(newCustomer);
  //    return this.httpClient.post<Customer>(this.url, newCustomer, this.httpOptions);
  //  }
//    public deleteCustomer(pid : number) :Observable<Customer>  {
//     // return Pizzas.find(Pizza => Pizza.id == pid)
//        console.log("comccing in serevice delete")
//     const url = `${this.urd}/${pid}`;
//     return this.httpClient.delete<Customer>(url);      //<any>(url)


//  }
    
    // public getCustomerById(cid: number): Customer {
    //     return customers.find(customer => customer.customerid === cid);
       

    }



