import { SearchComponent } from './componentes/search/search.component';
import { PitemComponent } from './componentes/pitem/pitem.component';
import { AbautComponent } from './componentes/abaut/abaut.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PortafolioComponent},
  { path: 'about', component: AbautComponent },
  { path: 'pitem/:id', component: PitemComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**',  pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
