import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/servicios/infopagina.service';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styleUrls: ['./abaut.component.scss']
})
export class AbautComponent implements OnInit {

  constructor( public infopaginaService: InfopaginaService) { }

  ngOnInit() {
  }

}
