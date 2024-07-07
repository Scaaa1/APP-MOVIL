import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../../services/auth.service'  // Asegúrate de ajustar la ruta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  run: string = "";
  password: string = "";
  passwordVisible: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router, private storage: Storage, private authService: AuthService) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async navigateToHome() {
    this.isLoading = true;
    try {
      const isAuthenticated = await this.authService.authenticate(this.run, this.password).toPromise();
      if (isAuthenticated) {
        // Guarda el RUN
        await this.storage.set('RutUsuario', this.run);
        await this.storage.set('PasswordUsuario', this.password);
        // Redirecciona a la página de inicio
        this.router.navigate(['/home']);
      } else {
        // Mensaje de error
        alert('Usuario o contraseña incorrecta');
      }
    } catch (error) {
      console.error('Error al autenticar:', error);
    } finally {
      this.isLoading = false;
    }
  }

  navigateToRecuperar() {
    this.router.navigate(['/recuperar']);
  }

  navigateToRegistro() {
    this.router.navigate(['/registro']);
  }
}
