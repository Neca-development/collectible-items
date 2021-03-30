import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { SignInComponent } from './views/auth/sign-in/sign-in.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ProfileComponent } from './views/profile/profile.component';

const authRoutes = [
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
];

const routes: Routes = [
  { path: '', component: AuthComponent, children: authRoutes },
  { path: 'auth', component: AuthComponent, children: authRoutes },
  { path: 'profile', component: ProfileComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
