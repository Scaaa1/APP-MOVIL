import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.page.html',
  styleUrls: ['./pbb.page.scss'],
})
export class PBBPage implements OnInit {

  arreglo_cadenaRecibida: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.arreglo_cadenaRecibida = this.router.getCurrentNavigation()?.extras?.state?.['arreglo_cadenaEnviado'] || [];
      }
    });
  }

  ngOnInit() {
    
    if (this.activatedRoute.snapshot.queryParams) {
      this.arreglo_cadenaRecibida = this.activatedRoute.snapshot.queryParams['arreglo_cadenaEnviado'] || [];
    }
  }
  editarItem(itemIndex: number) {
    console.log('Editar ítem:', itemIndex);
    // Aquí puedes añadir la lógica para editar el ítem, por ejemplo:
    // Navegar a una página de edición o abrir un modal
  }
}