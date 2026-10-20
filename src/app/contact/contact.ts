import { Component, Input } from '@angular/core';
import { ContactDetails } from '../../models/contactDetails';


@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() person!: ContactDetails;
  deleteContact(person: ContactDetails) {
    //todo: connect to server and delete the contact from the database
   
  }

  editContact(person: ContactDetails) {
    //todo: connect to server and edit the contact in the database
  }
 
 
}
