import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnnouncementDetailComponent } from './components/announcement-detail/announcement-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


export const routes: Routes = [

    //Chemin de la route, composant lié
  { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },


    { path: 'details/:id', component: AnnouncementDetailComponent },

  
  { path: '**', redirectTo: '' }// Route wildcard pour 404



];
