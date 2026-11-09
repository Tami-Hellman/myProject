import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactDetails } from '../../models/contactDetails';
import { Contact } from '../contact/contact';

@Component({
  imports: [Contact, FormsModule],
  selector: 'app-contact-person',
  styleUrl: './contact-person.css',
  templateUrl: './contact-person.html',
})
export class ContactPerson implements OnInit {
  people: ContactDetails[] = [
    {
      name: 'John Doe',
      email: 'ggf@dhhj.com',
      phone: '123-456-7890',
    },
    {
      name: 'Jane Smith',
      email: ' dgfh@hgh.v com',
      phone: '987-654-3210',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-1234',
    },
  ];

  newContact: ContactDetails = { name: '', email: '', phone: '' };
  isAddingContact = false;
  storageError = '';
  feedback = '';

  ngOnInit(): void {
    try {
      const savedContacts = localStorage.getItem('mest.contacts');
      if (savedContacts) {
        const parsed: unknown = JSON.parse(savedContacts);
        if (!Array.isArray(parsed) || !parsed.every(ContactPerson.isContactDetails)) {
          throw new Error('Saved contact data has an invalid format.');
        }
        this.people = parsed;
      }
    } catch (error) {
      this.storageError =
        error instanceof SyntaxError
          ? 'לא ניתן לקרוא את אנשי הקשר השמורים. הנתונים השמורים אינם תקינים.'
          : 'לא ניתן לטעון אנשי קשר שמורים בדפדפן הזה.';
    }
  }

  saveContact(): void {
    const contact: ContactDetails = {
      name: this.newContact.name.trim(),
      email: this.newContact.email.trim(),
      phone: this.newContact.phone.trim(),
    };
    const updatedPeople = [...this.people, contact];

    try {
      localStorage.setItem('mest.contacts', JSON.stringify(updatedPeople));
    } catch {
      this.storageError = 'לא ניתן לשמור את איש הקשר בדפדפן הזה. בדקי את הגדרות האחסון.';
      return;
    }

    this.people = updatedPeople;
    this.newContact = { name: '', email: '', phone: '' };
    this.storageError = '';
    this.feedback = 'איש הקשר נשמר ברשימה במכשיר הזה.';
    this.isAddingContact = false;
  }

  private static isContactDetails(value: unknown): value is ContactDetails {
    if (typeof value !== 'object' || value === null) {
      return false;
    }
    const contact = value as Record<string, unknown>;
    return (
      typeof contact['name'] === 'string' &&
      typeof contact['email'] === 'string' &&
      typeof contact['phone'] === 'string'
    );
  }
}
