import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaOrderComponent } from './pizzaordercomponent/pizzaorders.component';
import { PizzaOrderByIdComponent } from './pizzaordercomponent/pizzaorderbyid.component';
import { Error404NotFound } from './error/error404.component';
import { PizzaOrderRouteActivateService } from './service/pizzaorderroute.service';
import { CreatePizzaOrderComponent } from './pizzaordercomponent/createpizzaorder.component';
import { DeletePizzaOrderComponent } from './pizzaordercomponent/deletepizzaorder.component';
import { UpdatePizzaOrderComponent } from './pizzaordercomponent/updatepizzaorder.component';
import { PizzaOrderByDate } from './pizzaordercomponent/getpizzaorderbydate.component';
import { PizzaOrderByCost } from './pizzaordercomponent/pizzaorderbycostcomponent';
import { PizzaOrdersComponent } from './pizzaordercomponent/pizzaorder.component';
import { CustomersComponent } from './customer/basecustomer.component';
import { CustomerListComponent } from './customer/customer.component';
import { CustomerByIdComponent } from './customer/customerbyid.component';
import { CreateNewCustomerComponent } from './customer/createcustomer.component';
import { UpdateCustomerComponent } from './customer/updatecustomer.component';
import { DeleteCustomerComponent } from './customer/deletecustomer.component ';
import { CoupanComponent } from './coupancomponents/basecoupans.components';
import { CoupanListComponent } from './coupancomponents/coupanlist.component';
import { Error404Component } from './coupancomponents/coupannotfound.component';
import { AddCoupanComponent } from './coupancomponents/addcoupans.component';
import { DeleteCoupanComponent } from './coupancomponents/deletecoupans.component';
import { EditCoupanComponent } from './coupancomponents/editcoupans.component';
import { CoupanIdRouteGuardCheckService } from './service/coupanrouteguard.service';
import { CoupanByIdComponent } from './coupancomponents/coupanbyid.component';
import { PizzaBaseComponent } from './pizzacomponent/pizzabase.component';
import { AddPizzaComponent } from './pizzacomponent/addpizza.component';
import { PizzaComponent } from './pizzacomponent/pizza.component';
import { DeletePizzaComponent } from './pizzacomponent/deletepizza.component';
import { PizzaByCost } from './pizzacomponent/pizzabyminmaxcost.component';
import { PizzaByIdcomponent } from './pizzacomponent/pizzabyid.component';
import { UpdatePizzaComponent } from './pizzacomponent/updatepizza.component';
import { PizzaByTypecomponent } from './pizzacomponent/pizzabytype.component';
import { BookPizzaOrderComponent } from './pizzaordercomponent/bookpizzaorder.component';
import { PizzaAdminOrderByIdComponent } from './pizzaordercomponent/pizzaadminorderbyid.component';
import { LoginComponent } from './userlogin/login.component';
import { RegistrationComponent } from './userregistration/registration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';

import { UserguardGuard } from './userguard.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { UserNavbarComponent } from './navbar/usernavbar.component';
import { UserPizzaBaseComponent } from './pizzacomponent/userpizzabase.component';
import { ViewCoupanComponent } from './coupancomponents/viewusercoupans.components';
import { CoupanUserComponent } from './coupancomponents/baseusercoupans.component';
import { CustomerUserComponent } from './customer/userbasecustomer.component';
import { PizzaUserOrderComponent } from './pizzaordercomponent/baseuserpizzaorders.component';
import { AdminPizzaComponent } from './pizzacomponent/adminpizza.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthUserGaurd } from './service/userauthorize.guard';
import { AuthAdminGaurd } from './service/adminauthorize.guard';
import { AdminPizzaOrdersComponent } from './pizzaordercomponent/adminpizzaorder.component';


const routes: Routes = [
      {
        path:'', component:HomepageComponent
      },
 
  {
    path: 'adminlogin', component: AdminloginComponent
  },
  {
    path: "adminpage", component: NavbarComponent,canActivate:[AuthAdminGaurd],
    children: 
    [
      {
        path: "pizzaorder", component: PizzaOrderComponent,
        children:
        [
          { path: "all", component: AdminPizzaOrdersComponent }
        ]
      },
      {
        path: "pizza", component: PizzaBaseComponent,
        children: 
        [
          { path: "pizzalist", component: AdminPizzaComponent},
          {path:"addPizza", component : AddPizzaComponent },
          {path:"pizzaById",component : PizzaByIdcomponent},
          {path:"updatepizza/:pid",component :UpdatePizzaComponent },
          {path:"deletepizza/:pid", component : DeletePizzaComponent}

          
        ]
      },

      {
        path: "customers",
        component: CustomersComponent,
       
        children:
        [
          { path: "all", component: CustomerListComponent },
          { path: "deletecustomer", component: DeleteCustomerComponent },
         
        ]
        
      },
      {
        path: "coupans",
        component: CoupanComponent,
        children: [
          { path: "new", component: AddCoupanComponent },
          { path: "all", component: CoupanListComponent },
          {path:"coupans/:cid", component:CoupanByIdComponent}
        ]
      },
      {
        path: "pizza",
        component: PizzaBaseComponent
      },
    ]

  },

      {
        path:'registration',
        component:RegistrationComponent
      },
          {path:'login',component:LoginComponent},
          {
            path: "userpage", component: UserNavbarComponent,canActivate:[AuthUserGaurd],
           children: 
            [
              {
                path: "pizza", component: UserPizzaBaseComponent,
                children: 
                [
                  {path:"Pizzabycost", component : PizzaByCost },
                  {path:"ByPizzType" ,component : PizzaByTypecomponent},
                  {path:"pizzaById",component : PizzaByIdcomponent},
                  {path:"pizzalist", component : PizzaComponent},

                ]
              },
              {
                path: "customers", component: CustomerUserComponent,
                children:
                [
                  { path: "all", component: CustomerListComponent },
                  {path:"new",component:CreateNewCustomerComponent},
                  {path:"updatecustomer",component :UpdateCustomerComponent },
                  {path:"deletecustomer", component : DeleteCustomerComponent}, 
                  
                ]
                
              },
              {
                path: "coupans",
                component: CoupanUserComponent,
                children: [
                  { path :"all",component:ViewCoupanComponent},
                ]
              },
              {
                path: "pizzaorder", component: PizzaUserOrderComponent,
                children:
                [
                  {path:"bookpizza",component :BookPizzaOrderComponent},
                  {path :"date" , component :PizzaOrderByDate},
                  {path :"all" , component :PizzaOrdersComponent},
                  {path :"cost" , component :PizzaOrderByCost},
                  {path :":pizzaId" , component :PizzaOrderByIdComponent},
                  {path :"updatePizzaOrder/:pizzaId" , component :UpdatePizzaOrderComponent},
                  {path :"deleteorder/:pizId" , component :DeletePizzaOrderComponent},


                ]
              }

             
             
           ]
          },
          


    

];//routes





  //  {path :"all" , component :PizzaOrdersComponent},
  //                {path:"bookpizza",component :BookPizzaOrderComponent},
  //                {path :"date" , component :PizzaOrderByDate},
  //                {path :"cost" , component :PizzaOrderByCost},
  //                {path :"new" , component :CreatePizzaOrderComponent},
  //                {path :":pizzaId" , component :PizzaOrderByIdComponent,canActivate:[PizzaOrderRouteActivateService]},   
  //                {path :"admin/:pizzaId",component :PizzaAdminOrderByIdComponent},
  //                {path :"deleteorder/:pizId" , component :DeletePizzaOrderComponent},
  //                {path :'pizzaordernotfound', component: Error404NotFound},
  //                {path :"updatePizzaOrder/:pizzaId" , component :UpdatePizzaOrderComponent},
  //                {path :'' , redirectTo :'/pizzaorder' , pathMatch :'full'},
  //                {path :'******', component: Error404NotFound},

  //               {path:"all",component:CustomerListComponent},
  //               {path:"new",component:CreateNewCustomerComponent},
  //               {path :"customerbyid" , component :CustomerByIdComponent},
  //               //{path:"customer/:cid",component : CustomerByIdComponent},
  //               // {path:"createcustomer",component : CustomerByIdComponent},
  //               // {path:"findcustomer",component : FindCustomerComponent},
  //               {path:"updatecustomer/:cid",component :UpdateCustomerComponent },
  //               {path:"deletecustomer", component : DeleteCustomerComponent}, 



              
  //             { path :"all",component:CoupanListComponent},
  //             {path:"new", component:AddCoupanComponent},
  //             {path:"deletecoupans/:cid", component:DeleteCoupanComponent},
  //             {path:"editcoupans/:cid", component:EditCoupanComponent},
  //             {path:"coupans/:cid", component:CoupanByIdComponent, canActivate : [ CoupanIdRouteGuardCheckService ]},
  //             {​​​​​path : '***', component : Error404Component }​​​
  // ,


  //           {path:"addPizza", component : AddPizzaComponent },
  //           {path:"pizzalist", component : PizzaComponent},
  //           // {path:'pizzanotfound', component :Error404Component},                // this one not working
  //           {path:"Pizzabycost", component : PizzaByCost },
  //           {path:"deletepizza", component : DeletePizzaComponent},   // now not taking input from url
  //           {path:"pizzaById",component : PizzaByIdcomponent},
  //           {path:"findpizza",component : PizzaByIdcomponent},
  //           {path:"updatepizza/:pid",component :UpdatePizzaComponent },
  //           {path:"ByPizzType" ,component : PizzaByTypecomponent}


  //   ,
  //   {
  //    path:'login',
  //      component:LoginComponent,
  //     canActivateChild :[UserguardGuard],
  //     children :
  //     [{
  //         path :'pizza' , 
  //                       component : PizzaBaseComponent 
  //     }]

  //   },
  //   {
  //     path:'registration',
  //     component:RegistrationComponent
  //     },
  //     {
  //       path:'adminlogin',
  //       component:AdminloginComponent,

  //       children :
  //       [{
  //         path :"customers" , 
  //         component : CustomersComponent

  //       }]
  //       }





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
