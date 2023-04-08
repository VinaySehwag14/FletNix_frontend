import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShowlistingComponent } from './showlisting/showlisting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FilterByAgePipe } from './filter-by-age.pipe';
import { FilterComponent } from './filter/filter.component';
import { TvShowMovieDetailComponent } from './tv-show-movie-detail/tv-show-movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShowlistingComponent,
    FilterByAgePipe,
    FilterComponent,
    TvShowMovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
