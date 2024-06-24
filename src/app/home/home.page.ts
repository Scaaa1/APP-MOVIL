import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { Injectable } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage implements OnInit {

  weather: any;

  persona = {
    Nombre : 'Scarlett',
    Apellido : 'Ibarra'
   }
 
   arreglo_cadena: string [] =["400 HZ", "PCA", "TOLDO"];

   arreglo_belt: string [] = ["Monitores", "Operatividad"];

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private weatherService: WeatherService,
              private toastService: ToastService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
    this.weather = data;
 }, error => {
      console.error('Error al obtener los datos del clima', error);
  });
}

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  navigateToBelt() {
    let NavigationExtras: NavigationExtras ={
      state:{
        arreglo_beltEnviado: this.arreglo_belt
      }
    }
    this.router.navigate(['/belt'], NavigationExtras);
  }

  navigateToPBB() {
    let NavigationExtras: NavigationExtras ={
      state:{
        arreglo_cadenaEnviado: this.arreglo_cadena
      }
    }
    this.router.navigate(['/pbb'], NavigationExtras);
  }

  async navigateToLogin() {
    // Mostrar el toast
    await this.toastService.presentToast('¡Vuelve pronto!', 1200, 'middle', 'custom-toast');

    // Redirigir al login
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

