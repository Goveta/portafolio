import { ProductosService } from './../../servicios/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion-interface';

@Component({
  selector: 'app-pitem',
  templateUrl: './pitem.component.html',
  styleUrls: ['./pitem.component.scss']
})
export class PitemComponent implements OnInit {

  producto: ProductoDescripcion;
  productoId: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
    ) { }

  ngOnInit() {

    this.route.params
    .subscribe( parametro => {
      this.productoService.getProducto(parametro['id'])
        .subscribe( (producto: ProductoDescripcion) => {
          this.productoId = parametro['id'];
          this.producto = producto;
        });
    });
  }

}
