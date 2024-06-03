import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  Nombre: string = "Scarlett";
  Apellido: string = "";
  Email: string = "";
  Password: string = "";
  isLoading: boolean = false;

  constructor() {
    this.Nombre = '';
    this.Apellido = '';
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
