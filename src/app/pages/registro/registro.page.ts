import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  Nombre: string = "";
  Apellido: string = "";
  Email: string = "";
  Password: string = "";
  Run: string = "";
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  revisar() {
    this.isLoading = true;

    // Simulación de proceso de registro (puedes agregar validaciones aquí)
    setTimeout(() => {
      // Llamar al servicio para registrar usuario
      this.authService.registrarUsuario(this.Run, this.Password);
      
      // Limpiar campos del formulario después del registro
      this.Run = '';
      this.Nombre = '';
      this.Apellido = '';
      this.Email = '';
      this.Password = '';

      this.isLoading = false;
    }, 2000); // Simulación de tiempo de respuesta de servidor (2 segundos)
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home'], { queryParams: { Nombre: this.Nombre } });
  }
}
