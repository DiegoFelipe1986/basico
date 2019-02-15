import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  establishments: any;
  lat = -34.9041727;
  lng = -56.197949;

  constructor(public products: ProductsService, public router: Router) {
    const nuevoMarcador = new Marcador(-34.9041727, -56.197949);
    console.log(nuevoMarcador);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {}

  agregarMarcador(evento) {
    const coords: { lat: number; lng: number } = evento.coords;
    const point = `${evento.coords.lat},${evento.coords.lng}`;
    this.products.getEstablishments().subscribe((info: any) => {
        this.establishments = info;
        console.log(this.establishments.data);
    });
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    console.log(evento);
    return point;
  }
}
