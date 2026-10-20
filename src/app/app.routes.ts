import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ContactPerson } from './contact-person/contact-person';
import { EmailTemlates } from './email-temlates/email-temlates';
export const routes: Routes = [
  { path: 'homepage', component: HomePage },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'contact', component: ContactPerson },
  { path: 'email-templates', component: EmailTemlates },
  { path: '**', redirectTo: 'homepage' }
];
