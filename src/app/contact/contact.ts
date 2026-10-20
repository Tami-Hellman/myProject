import { Component, Input } from '@angular/core';
import { Contact as ContactDetails } from '../../models/contact';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() person!: ContactDetails;
}
