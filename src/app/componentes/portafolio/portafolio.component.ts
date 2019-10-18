import { ProductosService } from './../../servicios/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  constructor( public productosService: ProductosService) { }

  ngOnInit() {
  }

}
