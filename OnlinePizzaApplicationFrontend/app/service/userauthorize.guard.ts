import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})

export class AuthUserGaurd{
    constructor(private router :Router){}

    canActivate(){
        if (localStorage.getItem('isUser')){
            console.log('isUser')
            return true;
        }
        this.router.navigate[('')]
        return false;
    }
}