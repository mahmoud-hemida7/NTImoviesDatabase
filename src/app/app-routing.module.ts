import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';
import { UpcomingComponent } from './upcoming/upcoming.component';


const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'upcoming',component:UpcomingComponent,canActivate:[AuthGuardService]},
{path:'topRated',component:TopRatedComponent,canActivate:[AuthGuardService]},
{path:'movies',component:MoviesComponent,canActivate:[AuthGuardService]},
{path:'tvshows',component:TvShowsComponent,canActivate:[AuthGuardService]},
{path:'movieDetails/:type/:id',component:MoviesDetailsComponent,canActivate:[AuthGuardService]},
{path:'tvshowDetails/:type/:id',component:TvshowDetailsComponent,canActivate:[AuthGuardService]},
{path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
