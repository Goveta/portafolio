import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina';
import { Infoequipo } from '../interfaces/info-equipo';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: Infopagina = {};
  equipo: Infoequipo;
  cargada = false;

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
      this.http.get('assets/data/data.json')
      .subscribe( (resp: Infopagina) => {
          this.cargada = true;
          this.info = resp;
      });
   }

   private cargarEquipo(){
    this.http.get('https://angular-html-b55b2.firebaseio.com/equipo.json')
    .subscribe( (resp: Infoequipo) => {
        this.equipo = resp;
    });
   }
}
