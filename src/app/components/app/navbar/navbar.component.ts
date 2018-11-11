import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  authenticated: boolean;

  ngOnInit() {
   this.checkAuthenticated();
  }

  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  checkAuthenticated(){
    if(!localStorage.getItem('userToken')) this.authenticated = false;
    else this.authenticated = true;
  }

}
