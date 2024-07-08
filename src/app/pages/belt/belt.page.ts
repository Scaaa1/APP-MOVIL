import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-belt',
  templateUrl: './belt.page.html',
  styleUrls: ['./belt.page.scss'],
})
export class BeltPage implements OnInit {

  arreglo_cadenaRecibida: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.arreglo_cadenaRecibida = this.router.getCurrentNavigation()?.extras?.state?.['arreglo_cadenaEnviado'] || [];
      }
    });
  }

  ngOnInit() {
  }
}