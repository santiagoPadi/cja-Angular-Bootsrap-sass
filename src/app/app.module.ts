import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Get routing
import { app_routing } from './app.routes'

import { AppComponent } from './app.component';
import { InstituteComponent } from './components/pages/institute/institute.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarrouselComponent } from './components/pages/home/carrousel/carrousel.component';
import { IngresoComponent } from './components/pages/ingreso/ingreso.component';


@NgModule({
  declarations: [
    AppComponent,
    InstituteComponent,
    CalendarComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarrouselComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
