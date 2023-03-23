import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from '../model/usermodel';
import { Observable } from 'rxjs';


@Injectable()
export class UserService  {
  private url:string ="http://localhost:9999/user"
  private loginurl:string ="http://localhost:9999/user/signin"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  

  constructor(private httpclient:HttpClient) { }
  // public getsignIn():Observable<UserModel[]>
  // {
  //   let obs : Observable<UserModel[]> =  this.httpclient.get<UserModel[]>(this.url);
  //   return this.httpclient.get<UserModel[]>(this.url);
  //   // return this.httpClient.get<Course[]>(this.url);
    
  // }

  
  public addNewUser(newuser){
    console.log(newuser);
        return this.httpclient.post<UserModel>(this.url ,newuser,this.httpOptions);
  }
  public signInUser(signindata):Observable<UserModel>{
    // const url = `${this.loginUrl}/${signindata.email}/${signindata.password}`;
    const url = `${this.loginurl}/${signindata.userName}/${signindata.password}`;
    //console.log(JSON.stringify(signindata)+ "from service");
    return this.httpclient.get<UserModel>(url);
        
    }
  // public userLogin(userlogin){
  //   console.log(userlogin);
    
  //   const url = `${this.loginurl}/${userlogin.userName}/${userlogin.password}`;
  //   return this.httpclient.get<UserModel>(url );
    
      
  // }


}
