import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  weather: any;
  zoomLevel: number = 1;

  persona = {
    Nombre: 'Scarlett',
    Apellido: 'Ibarra'
  };

  arreglo_cadena: string[] = ["400 HZ", "PCA", "TOLDO"];
  arreglo_belt: string[] = ["Monitores", "Operatividad"];

  constructor(private router: Router,
              private weatherService: WeatherService,
              private toastService: ToastService,
              private cdr: ChangeDetectorRef) { }

  zoomIn() {
    this.zoomLevel += 0.1;
    this.updateZoom();
  }

  zoomOut() {
    if (this.zoomLevel > 0.1) {
      this.zoomLevel -= 0.1;
      this.updateZoom();
    }
  }

  updateZoom() {
    const cards = document.querySelectorAll('ion-card, ion-card-title, ion-card-content');
    cards.forEach(card => {
      (card as HTMLElement).style.fontSize = `${this.zoomLevel}em`;
    });
  }

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
    let navigationExtras: NavigationExtras = {
      state: {
        arreglo_beltEnviado: this.arreglo_belt
      }
    };
    this.router.navigate(['/belt'], navigationExtras);
  }

  navigateToPBB() {
    let navigationExtras: NavigationExtras = {
      state: {
        arreglo_cadenaEnviado: this.arreglo_cadena
      }
    };
    this.router.navigate(['/pbb'], navigationExtras);
  }

  async navigateToLogin() {
    await this.toastService.presentToast('¡Vuelve pronto!', 1000, 'middle', 'custom-toast');
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
