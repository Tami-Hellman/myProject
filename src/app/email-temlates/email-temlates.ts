import { Component } from '@angular/core';
import { CelebrationUpdate } from '../celebration-update/celebration-update';

@Component({
  imports: [CelebrationUpdate],
  selector: 'app-email-temlates',
  styleUrl: './email-temlates.css',
  templateUrl: './email-temlates.html',
})
export class EmailTemlates {
  isUpdateOpen = false;
}
