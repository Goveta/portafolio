import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/servicios/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  constructor(public infopaginaService: InfopaginaService) { }

  ngOnInit() {
  }

}
