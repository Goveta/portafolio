import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../servicios/infopagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public infopaginaService: InfopaginaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  buscarProducto( termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
