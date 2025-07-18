import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnnouncementDetailComponent } from './components/announcement-detail/announcement-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';


export const routes: Routes = [

    //Chemin de la route, composant lié
  { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'announcement-list', component: AnnouncementListComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'form-register', component: FormRegisterComponent },
            { path: 'form-login', component: FormLoginComponent },



    { path: 'details/:id', component: AnnouncementDetailComponent },

  
  { path: '**', redirectTo: '' }// Route wildcard pour 404



];
