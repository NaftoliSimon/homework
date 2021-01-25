import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { ZipExamplesComponent } from './zip-examples/zip-examples.component';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherPageComponent
  },
  {
    path: 'examples',
    component: ZipExamplesComponent
  },
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }