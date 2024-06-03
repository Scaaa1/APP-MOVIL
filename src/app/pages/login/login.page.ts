import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToRegistro() {
    this.router.navigate(['/registro']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToRecuperar() {
    this.router.navigate(['/recuperar']);
  }
}
