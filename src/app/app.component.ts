import { ProductosService } from './servicios/productos.service';
import { InfopaginaService } from './servicios/infopagina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public infpaginaService: InfopaginaService,
    public productosService: ProductosService
    ) {}
}
