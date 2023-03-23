import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { RouterTestingModule } from "@angular/router/testing";
// import { Observable } from "rxjs";
// import { Coupan } from "../model/coupan.model";
import { CoupanService } from "./coupan.service";

@Injectable()
export class CoupanIdRouteGuardCheckService implements CanActivate {

  constructor(private coupanService : CoupanService , private router : Router){

  }
  canActivate(activatesroute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    console.log("Route guard is called")
    //activate route when true returned other wise don't activate the url
    if(!this.coupanService.getCoupanById(+activatesroute.params['cid'])){
        this.router.navigate(['/coupansnotfound'])
    }
    else{
      return true
    }
  }
}
