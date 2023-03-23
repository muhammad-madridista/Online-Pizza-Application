import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from '../model/adminmodel';
import { AdminService } from '../service/adminservice';

@Component({
  selector: 'adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements  OnInit{
    constructor(private adminservice: AdminService,private router:Router) { }
    admin : AdminModel;
    submitted:boolean=false;
    haveData: number;
    data: any;
    resError:any;
    ngOnInit() {
      document.body.classList.add('bg-img');
  }
    signInUser(signindata:AdminModel){
      // this.haveData = 0; 
      //this.submitted=true;
      
      this.adminservice.signInUser(signindata).subscribe((admin) => {this.admin=admin},(resError)=> {this.resError=resError})
      if(this.admin!=null){
          
          localStorage.setItem('isAdmin','admin');
          alert("Admin signin Successfully .Click Ok to Proceed");
          this.router.navigate(['/adminpage']);
       } //else{
      //   alert("Enter Correct Admin Username and password");
      // }
      
  }

  
  
  
    // constructor(private adminservice: AdminService,private router:Router) { }
  //   admin : AdminModel[];
  //   submitted:boolean=false;
  //   haveData: number;
  //   data: any;
  //   resError:any;

    
    // signInUser(signindata:AdminModel){
        
        
    //     this.adminservice.signInUser(signindata).subscribe((admin) => (admin) => {this.admin=admin},(resError)=> {this.resError=resError})
    //     if(this.admin!=null){
            
    //         localStorage.setItem('isAdmin','admin');
    //         alert("Logged In Successfully");
    //         this.router.navigate(['/home']);
    //     } 
        
    // }

}
