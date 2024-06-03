import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  persona = {
    Nombre : 'Scarlett',
    Apellido : 'Ibarra'
   }
 
   arreglo_cadena: string [] =["PBB16", "PBB17", "PBB18"];

  constructor(private router: Router, 
              private route: ActivatedRoute) {}

  ngOnInit() {
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  navigateToBelt() {
    this.router.navigate(['/belt']);
  }

  navigateToPBB() {
    let NavigationExtras: NavigationExtras ={
      state:{
        arreglo_cadenaEnviado: this.arreglo_cadena
      }
    }
    this.router.navigate(['/pbb'], NavigationExtras);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

