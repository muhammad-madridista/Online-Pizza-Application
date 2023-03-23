import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaOrderListComponent } from './pizzaordercomponent/pizzaorderlist.component';
import { PizzaOrderComponent } from './pizzaordercomponent/pizzaorders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PizzaOrderByIdComponent } from './pizzaordercomponent/pizzaorderbyid.component';
import { DeletePizzaOrderComponent } from './pizzaordercomponent/deletepizzaorder.component';
import { UpdatePizzaOrderComponent } from './pizzaordercomponent/updatepizzaorder.component';
import { CreatePizzaOrderComponent } from './pizzaordercomponent/createpizzaorder.component';
import { PizzaOrderByCost } from './pizzaordercomponent/pizzaorderbycostcomponent';
import { PizzaOrderByDate } from './pizzaordercomponent/getpizzaorderbydate.component';
import { Error404NotFound } from './error/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzaOrderService } from './service/pizzaorder.service';
import { PizzaOrdersComponent } from './pizzaordercomponent/pizzaorder.component';
import { PizzaOrderRouteActivateService } from './service/pizzaorderroute.service';

import { DeleteCustomerComponent } from './customer/deletecustomer.component ';
import { CustomerByIdComponent } from './customer/customerbyid.component';
import { AllCustomerComponent } from './customer/allcustomer.component';
import { CreateNewCustomerComponent } from './customer/createcustomer.component';
import { UpdateCustomerComponent } from './customer/updatecustomer.component';
import { FindCustomerComponent } from './customer/findcustomer.component';
import { CustomersComponent } from './customer/basecustomer.component';
import { CustomerService } from './service/customer.service';
import { CustomerListComponent } from './customer/customer.component';

import { CoupanListComponent } from './coupancomponents/coupanlist.component';
import { AllCoupanComponent } from './coupancomponents/allcoupanlist.component';
import { CoupanByIdComponent } from './coupancomponents/coupanbyid.component';
import { Error404Component } from './coupancomponents/coupannotfound.component';
import { DeleteCoupanComponent } from './coupancomponents/deletecoupans.component';
import { AddCoupanComponent } from './coupancomponents/addcoupans.component';
import { CoupanComponent } from './coupancomponents/basecoupans.components';
import { EditCoupanComponent } from './coupancomponents/editcoupans.component';
import { CoupanService } from './service/coupan.service';
import { CoupanIdRouteGuardCheckService } from './service/coupanrouteguard.service';
import { PizzaComponent } from './pizzacomponent/pizza.component';
import { OrderComponent } from './pizzacomponent/order.component';
import { AddPizzaComponent } from './pizzacomponent/addpizza.component';
import { PizzaByIdcomponent } from './pizzacomponent/pizzabyid.component';
import { PizzaByTypecomponent } from './pizzacomponent/pizzabytype.component';
import { UpdatePizzaComponent } from './pizzacomponent/updatepizza.component';
import { DeletePizzaComponent } from './pizzacomponent/deletepizza.component';
import { DateComponent } from './customer/date.component';
import { PizzaBaseComponent } from './pizzacomponent/pizzabase.component';
import { PizzaByCost } from './pizzacomponent/pizzabyminmaxcost.component';
import { PizzaService } from './service/pizza.service';
import { PizzaIdRouteGuardService } from './service/pizzarouteguard.service';
import { BookPizzaOrderComponent } from './pizzaordercomponent/bookpizzaorder.component';
import { PizzaAdminOrderByIdComponent } from './pizzaordercomponent/pizzaadminorderbyid.component';
import { LoginComponent } from './userlogin/login.component';
import { RegistrationComponent } from './userregistration/registration.component';
import { UserService } from './service/userservice.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminService } from './service/adminservice';
import { UserNavbarComponent } from './navbar/usernavbar.component';
import { UserPizzaBaseComponent } from './pizzacomponent/userpizzabase.component';
import { ViewCoupanComponent } from './coupancomponents/viewusercoupans.components';
import { CoupanUserComponent } from './coupancomponents/baseusercoupans.component';
import { CustomerUserComponent } from './customer/userbasecustomer.component';
import { PizzaUserOrderComponent } from './pizzaordercomponent/baseuserpizzaorders.component';
import { AdminPizzaComponent } from './pizzacomponent/adminpizza.component';
import { OrderForAdminComponent } from './pizzacomponent/orderforadmin.component';
import { FindPizzaComponent } from './pizzacomponent/findpizza.component';
import { AllUserCoupanComponent } from './coupancomponents/userallcoupanlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminPizzaOrdersComponent } from './pizzaordercomponent/adminpizzaorder.component';
import { AdminPizzaOrderListComponent } from './pizzaordercomponent/adminpizzaorderlist.component';






@NgModule({
  declarations: [AppComponent, PizzaOrderComponent,PizzaOrdersComponent,NavbarComponent,UserNavbarComponent,
                PizzaOrderListComponent,PizzaOrderByIdComponent,CreatePizzaOrderComponent,PizzaUserOrderComponent,
                Error404NotFound,DeletePizzaOrderComponent,UpdatePizzaOrderComponent,
                PizzaOrderByDate,PizzaOrderByCost,BookPizzaOrderComponent,PizzaAdminOrderByIdComponent,
                AllCustomerComponent, CustomerByIdComponent,DeleteCustomerComponent,
                CustomerListComponent, CreateNewCustomerComponent, UpdateCustomerComponent,
                FindCustomerComponent, CustomersComponent,CustomerUserComponent,
                CoupanListComponent, AllCoupanComponent,CoupanByIdComponent,CoupanUserComponent,
               Error404Component,AddCoupanComponent,ViewCoupanComponent,
                DeleteCoupanComponent,EditCoupanComponent,CoupanComponent,
                PizzaComponent,OrderComponent,AllUserCoupanComponent,
                AddPizzaComponent,UserPizzaBaseComponent,AdminPizzaComponent,
                PizzaByIdcomponent,PizzaByTypecomponent,Error404Component,OrderForAdminComponent,
                DateComponent,DeletePizzaComponent,UpdatePizzaComponent,
                PizzaByCost,PizzaBaseComponent,FindPizzaComponent,
                LoginComponent, RegistrationComponent,AdminloginComponent,
                HomepageComponent,AdminPizzaOrdersComponent,AdminPizzaOrderListComponent,PizzaAdminOrderByIdComponent

                ],
  imports: [ BrowserModule,     
           AppRoutingModule, 
           HttpClientModule,
           FormsModule,
           ReactiveFormsModule,
           NgxPaginationModule

           ],
  providers: [PizzaOrderService,PizzaOrderRouteActivateService,CustomerService,CoupanService,CoupanIdRouteGuardCheckService,PizzaService,PizzaIdRouteGuardService,UserService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
