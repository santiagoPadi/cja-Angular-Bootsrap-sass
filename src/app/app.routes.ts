import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { InstituteComponent } from './components/pages/institute/institute.component';
import { IngresoComponent } from './components/pages/ingreso/ingreso.component';

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'institute', component: InstituteComponent},
    {path: 'ingress', component: IngresoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

]
export const app_routing = RouterModule.forRoot(app_routes, { useHash: true})
