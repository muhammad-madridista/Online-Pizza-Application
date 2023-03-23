import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Pizza } from "../model/pizza.model";

@Injectable()
export class PizzaService{
 
  private  url  : string = "http://localhost:9999/pizzahome/pizza"
  private ulu : string = "http://localhost:9999/pizzahome"
  private utype : string = "http://localhost:9999/pizzahome/ByPizzType"
  private costt : string = "http://localhost:9999/pizzahome/between"
  //{minimumcost}/{maximumcost}


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  constructor(private httpClient : HttpClient){
  }


    public getAllPizza() : Observable<Pizza[]> {
       // return Pizzas;
       return this.httpClient.get<Pizza[]>(this.url);
          // let obs  ,return obs
    }
    public getPizzaById(pid : number) :Observable<Pizza>  {
       // return Pizzas.find(Pizza => Pizza.id == pid)
       console.log("coming in serevice pizza by Id")

       const url = `${this.ulu}/${pid}`;
       return this.httpClient.get<Pizza>(url);


    }


    public updatePizza(newPizza : Pizza):Observable<Pizza> {
      const ull = `${this.ulu}/${newPizza.pizzaId}`;
      console.log("coming in update piza service")
      return this.httpClient.put<Pizza>(ull, newPizza, this.httpOptions); 
    }

    public getPizzaByType(pizzaType : string) :Observable<Pizza[]>  {
      // return Pizzas.find(Pizza => Pizza.id == pid)
      console.log("coming in serevice pizza by type")
      const urlu = `${this.utype}/${pizzaType}`;
      return this.httpClient.get<Pizza[]>(urlu);


   }
   public getPizzaByCost(minimumcost : number ,maximumcost : number) :Observable<Pizza[]>  {
     
      console.log("coming in serevice pizza by minmum maximum" + minimumcost + "maximum one" + maximumcost)
     


      const urlp = `${this.costt}/${minimumcost}/${maximumcost}`;
      return this.httpClient.get<Pizza[]>(urlp);


   }


   public addPizza(newPizza : Pizza):Observable<Pizza> {
      return this.httpClient.post<Pizza>(this.ulu, newPizza, this.httpOptions);
    }


    public deletePizzaById(pid : number) :Observable<Pizza>  {
      // return Pizzas.find(Pizza => Pizza.id == pid)
         console.log("comccing in serevice delete")
      const url = `${this.ulu}/${pid}`;
      return this.httpClient.delete<Pizza>(url);      //<any>(url)


   }



}
  //  // const Pizza : Pizza[];
  //   const Pizzas : Pizza[] = [
  //     {
  //       id: 1,
  //       name: 'Dominos',
  //       cost: 500,
  //       type: 'Veg',
  //       ImageUrl: '/assets/images/pizza.png'
  //     },
  
  //     {
  //       id: 2,
  //       name: 'Lapinoz',
  //       cost: 600,
  //       type: 'non-Veg',
  //       ImageUrl: '/assets/images/pizza.png'
  //     },
  //     {
  //       id: 3,
  //       name: 'Pizzainoz',
  //       cost: 900,
  //       type: 'non-Veg',
  //       ImageUrl: '/assets/images/pizza.png'
  //     },
  //     {
  //       id: 4,
  //       name: 'hut',
  //       cost: 700,
  //       type: 'non-Veg',
  //       ImageUrl: '/assets/images/pizza.png'
  //     },
  //     {
  //       id: 5,
  //       name: 'cherry',
  //       cost: 700,
  //       type: 'veg',
  //       ImageUrl: '/assets/images/pizza.png'
  //     },
  
  //   ]



