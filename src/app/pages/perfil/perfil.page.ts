import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  Nombre: string = "Scarlett";
  Apellido: string = "";
  Email: string = "";
  Password: string = "";
  runUsuario: string = "";
  isLoading: boolean = false;

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    // Recuperar el RUN del almacenamiento
    this.runUsuario = await this.storage.get('RutUsuario');
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

  async VerUsuario() {
    let RutUsuario = await this.storage.get('RutUsuario');
    console.log("El usuario es: " + RutUsuario);
  }
}

