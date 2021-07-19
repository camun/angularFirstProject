import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Rutas

import { AppRoutingModule } from './app-routing.module';

// Services
import { HeoresServices } from './services/heroes.services';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeoresServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
