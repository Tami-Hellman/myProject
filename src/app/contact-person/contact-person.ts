import { Component } from '@angular/core';
import { ContactDetails } from '../../models/contactDetails';
import { Contact } from '../contact/contact';



@Component({
  imports: [Contact],
  selector: 'app-contact-person',
  styleUrl: './contact-person.css',
  templateUrl: './contact-person.html',
})
export class ContactPerson {
  people :ContactDetails[] = [
    {
      name: 'John Doe',
      email: 'ggf@dhhj.com',
      phone: '123-456-7890'
    },
    {
      name: 'Jane Smith',
      email: ' dgfh@hgh.v com',
      phone: '987-654-3210'
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-1234'
    }
  ];
 
}
