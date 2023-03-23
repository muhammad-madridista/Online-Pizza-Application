import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminModel } from "../model/adminmodel";


@Injectable()
export class AdminService  {
  private adminurl:string ="http://localhost:9999/admin"
  private adminloginurl:string ="http://localhost:9999/admin/signin"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  

  constructor(private httpclient:HttpClient) {

   }
  
   public addNewAdmin(newadmin){
    console.log(newadmin);
        return this.httpclient.post<AdminModel>(this.adminurl ,newadmin,this.httpOptions);
  }
  public signInUser(signindata):Observable<AdminModel>{
    // const url = `${this.loginUrl}/${signindata.email}/${signindata.password}`;
    const url = `${this.adminloginurl}/${signindata.adminName}/${signindata.password}`;
    //console.log(JSON.stringify(signindata)+ "from service");
    return this.httpclient.get<AdminModel>(url);
        
    }
  

}