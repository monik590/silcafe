import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactusComponent} from './components/contactus/contactus.component';


const APP_ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
