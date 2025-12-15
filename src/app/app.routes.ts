import { Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/Home-component/Home-component.component';
import { SinginComponentComponent } from './pages/singin-component/singin-component.component';
import { RegisterComponentComponent } from './pages/register-component/register-component.component';

export const routes: Routes = [
  {path:'', component: HomeComponentComponent, title:'Urbe - Home'},
  {path:'singup', component: SinginComponentComponent, title:'Urbe - Singup'},
  {path:'register', component: RegisterComponentComponent, title:'Urbe - Register'},
  {path:'**', redirectTo:'', pathMatch:'full'}
];
