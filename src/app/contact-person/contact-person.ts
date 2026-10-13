import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact-person',
  styleUrl: './contact-person.css',
  templateUrl: './contact-person.html',
})
export class ContactPerson {
  name: string = '';
  email: string = '';
  phone: string = '';
  
}
