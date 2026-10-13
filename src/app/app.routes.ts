import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import{ ContactPerson } from './contact-person/contact-person';
import { EmailTemlates } from './email-temlates/email-temlates';
export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'contact', component: ContactPerson },
  { path: 'email-templates', component: EmailTemlates },
  { path: '**', redirectTo: '' }
];
