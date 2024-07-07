import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  // DECLARACIÓN DE VARIABLES
  Nombre: string = "";
  Apellido: string = "";
  Email: string = "";
  Password: string = "";
  Run: string = "";
  isLoading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home'], { queryParams: { Nombre: this.Nombre } });
  }
  
  revisar() {
    // Lógica para el método revisar
    console.log('Nombre:', this.Nombre);
    console.log('Apellido:', this.Apellido);
    console.log('Email:', this.Email);
    console.log('Password:', this.Password);
    this.isLoading = true;

    setTimeout(() => {
      // Después de que la tarea se complete, oculta el ion-progress-bar
      this.isLoading = false;
    }, 3000);
  }

}
