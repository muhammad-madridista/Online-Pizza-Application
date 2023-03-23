import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Coupan } from "../model/coupan.model";

@Injectable()
export class CoupanService{
  private url: string = "http://localhost:9999/coupan/coupan"
  private url1: string="http://localhost:9999/coupan"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
constructor(private httpClient:HttpClient){

}


   public viewCoupans():  Observable<Coupan[]>{
    // let obs : Observable<Coupan[]> =  this.httpClient.get<Coupan[]>(this.url);
    return this.httpClient.get<Coupan[]>(this.url)
    }

   public getCoupanById(cid:number): Observable<Coupan>{
    //  return coupans.find( coupan => coupan.coupanId === cid);
    console.log(cid)
    const url1 = `${this.url1}/${cid}`;
    return this.httpClient.get<Coupan>(url1);

   }

   public addCoupans(newCoupan):Observable<Coupan> {
    console.log(newCoupan)
    return this.httpClient.post<Coupan>(this.url1, newCoupan, this.httpOptions);
    
  }

  public deleteCoupans(cid: number): Observable<Coupan> {
    // return courses.find( course => course.id === cid);
    const url = `${this.url1}/${cid}`;
    return this.httpClient.delete<Coupan>(url);
  }

  public editCoupans(newCoupan):Observable<Coupan> {
    console.log(newCoupan)
    const url2 = `${this.url1}/${newCoupan.coupanId}`;
    return this.httpClient.put<Coupan>(url2, newCoupan, this.httpOptions);
    
  }

}
// const coupans: Coupan[] =[{
//       coupanId:1, 
//        coupanName:"Chicken Maharaja",
//        //date:new Date('10/10/2021'),
//        coupanDescription:"This pizza is good",
//       //  price:1000,
//       coupanPizzaId:123,
//        imageUrl:'/assets/images/chicken.jpg',
//       //  location:{
//       //      trainingRoom:"Room1",
//       //      building:'building1',
//       //      city:'Mumbai'
//       //  }
//      },  
//   //      {
//   //        id:2,
//   //        name:"Chicken Shrimps",
//   //        date:new Date('11/10/2021'),
//   //        price:2000,
//   //        imageUrl:'/assets/images/chicken-shrimp.jpg',
 
//   //  },
//   //  {
//   //    id:3, 
//   //    name:"Mexican Paneer",
//   //    date:new Date('10/10/2021'),
//   //    price:900,
//   //    imageUrl:'/assets/images/paneer.jpg',
//   //    location:{
//   //        trainingRoom:"Room3",
//   //        building:'building3',
//   //        city:'Lucknow'
//   //    }
//   //  }
 
 
//  ]

