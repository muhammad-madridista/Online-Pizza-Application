import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private router:Router) { }

  signOut(){
    localStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
