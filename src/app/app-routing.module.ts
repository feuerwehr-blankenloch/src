import { PicturesComponent } from './pictures/pictures.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FahrzeugeComponent } from './fahrzeuge/fahrzeuge.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pics', component: PicturesComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'fahrzeuge', component: FahrzeugeComponent},
  {path: 'cars', component: FahrzeugeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
