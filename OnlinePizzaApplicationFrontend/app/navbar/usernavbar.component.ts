import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-nav-bar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class UserNavbarComponent {

  constructor(private router:Router) { }

  usersignOut(){
    localStorage.removeItem('isUser');
    
    this.router.navigate(['']);
  }
}
