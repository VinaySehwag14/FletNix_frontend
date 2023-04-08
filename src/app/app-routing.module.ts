import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowlistingComponent } from './showlisting/showlisting.component';
import { AuthGuard } from './services/auth.guard';
import { TvShowMovieDetailComponent } from './tv-show-movie-detail/tv-show-movie-detail.component';

const routes: Routes = [
  {path:"",redirectTo:'/login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"register",component:RegisterComponent},
  {path:"show",component:ShowlistingComponent},
  { path: 'tv-show-movie/:id', component: TvShowMovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }