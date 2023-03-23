import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router/src/utils/preactivation";

@Injectable({providedIn:'root'})

export class AuthAdminGaurd {
    constructor(private router :Router){}

    canActivate(){
        if (localStorage.getItem('isAdmin')){
            console.log('isAdmin')
            return true;
        }
        this.router.navigate[('')]
        return false;
    }
}