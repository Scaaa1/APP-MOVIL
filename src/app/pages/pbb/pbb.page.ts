import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.page.html',
  styleUrls: ['./pbb.page.scss'],
})
export class PBBPage implements OnInit {

  arreglo_cadenaRecibida: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    
    if (this.activatedRoute.snapshot.queryParams) {
      this.arreglo_cadenaRecibida = this.activatedRoute.snapshot.queryParams['arreglo_cadenaEnviado'] || [];
    }
  }
}