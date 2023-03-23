import { JsonPipe } from '@angular/common';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/usermodel';
import { UserService } from '../service/userservice.component';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    // loginForm: FormGroup;
    // submitted = false;
    // logindata:UserModel

    constructor(private userservice: UserService,private router:Router) { }
    user : UserModel;
    submitted:boolean=false;
    haveData: number;
    data: any;
    resError:any;

    
    signInUser(signindata:UserModel){
        // this.haveData = 0; 
        //this.submitted=true;
        
        this.userservice.signInUser(signindata).subscribe((user) => {this.user=user},(resError)=> {this.resError=resError})
        if(this.user!=null){
            
            localStorage.setItem('isUser','user');
            alert("Logged In Successfully");
            this.router.navigate(['/userpage']);
         } //else{
        //     alert("Enter Correct Username and password");
        //   }
        
    }
}
        //localStorage.setItem('isUser','user');

        // console.log(JSON.stringify(this.resError)+"from component");
        // console.log(JSON.stringify(signindata)+"from component");
        // //alert("signed In");
        //this.router.navigate(['/navbar'])
    // }
    

    // ngOnInit() {
    //     this.loginForm = this.formBuilder.group({
    //         username: ['', Validators.required],
    //         // lastName: ['', Validators.required],
    //         // email: ['', [Validators.required, Validators.email]],
    //         password: ['', [Validators.required, Validators.minLength(6)]]
            
    //     });
    //     console.log(this.loginForm);
    // }
    
    // // convenience getter for easy access to form fields
    // get f() { return this.loginForm.controls; }

    // onSubmit(userlogin) {
    //     this.submitted = true;
    //     console.log(JSON.stringify(userlogin))
    //     this.userservice.userLogin(userlogin).subscribe(userlist => this.logindata = userlist);
    //          console.log(userlogin)
    //          this.router.navigate(['/home'])
    //         //  console.log(newuser)

    //     // stop here if form is invalid
    //     // if (this.loginForm.invalid) {
    //     //     return;
    //     // }

    //     // alert('Login Sucessful!! :-)')
    // }

  
// }
