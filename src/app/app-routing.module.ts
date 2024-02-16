import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, 
  {path:'about',component:AboutComponent},
  {path:'resumen',component:ResumenComponent},
  {path:'works',component:WorksComponent},
  {path:'contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
