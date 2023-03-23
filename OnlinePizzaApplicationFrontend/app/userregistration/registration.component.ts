
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/usermodel';
import { UserService } from '../service/userservice.component';


@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private userdata:UserModel;
  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private userservice: UserService,private router:Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', Validators.required],
            // lastName: ['', Validators.required],
            // email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(newuser) {
        this.submitted = true;
        this.userservice.addNewUser(newuser).subscribe(userlist => this.userdata = userlist);
             console.log(newuser)
             alert("Registered Successfully !! Click Ok to Proceed to login page");
             this.router.navigate(['/login'])
             console.log(newuser)


        // stop here if form is invalid
    //     if (this.registerForm.invalid) {
    //         return;
    //     }

    //     alert('Registration Sucessful!! :-)')
    }
  }
  