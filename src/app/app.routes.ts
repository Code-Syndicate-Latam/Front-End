import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home-component/Home-component.component';
import { SigninComponent } from './pages/signin-component/signin-component.component';
import { ProfileComponent } from './pages/profile-component/profile-component';
import { RegisterAgentComponent } from './pages/register/register-agent-component/register-agent-component';
import { RegisterOwnerComponent } from './pages/register/register-owner-component/register-owner-component';


export const routes: Routes = [
  {path:'', component: HomeComponent, title:'Urbe - Home'},
  {path:'signin', component: SigninComponent, title:'Urbe - Signin'},
  {path:'profile', component: ProfileComponent, title:'Urbe - Profile'},
  {path:'registeragent', component: RegisterAgentComponent, title:'Urbe - Register Agent'},
  {path:'registerowner', component: RegisterOwnerComponent, title:'Urbe - Register Owner'},
  {path:'**', redirectTo:'', pathMatch:'full'}
];
