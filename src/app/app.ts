import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ContactPerson } from './contact-person/contact-person';
import { EmailTemlates } from './email-temlates/email-temlates';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomePage,ContactPerson,EmailTemlates],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myProject');
}
