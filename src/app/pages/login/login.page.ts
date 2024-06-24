import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  run: string = "";
  password: string = "";
  isLoading: boolean = false;

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async navigateToHome() {
    try {
      // Guarda el RUN en el almacenamiento
      await this.storage.set('RutUsuario', this.run);
      // Redirecciona a la página de inicio
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al navegar a Home:', error);
    }
  }

  navigateToRecuperar() {
    this.router.navigate(['/recuperar']);
  }

  navigateToRegistro() {
    this.router.navigate(['/registro']);
  }
}
