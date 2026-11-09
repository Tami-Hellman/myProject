import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CelebrationUpdateRecord {
  id: string;
  subject: string;
  name: string;
  celebration: string;
  date: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-celebration-update',
  styleUrl: './celebration-update.css',
  templateUrl: './celebration-update.html',
})
export class CelebrationUpdate implements OnInit {
  @Output() readonly close = new EventEmitter<void>();

  readonly celebrationTypes = [
    'חתונה',
    'הולדת בן',
    'הולדת בת',
    'יום הולדת',
    'אירוסין',
    'בר מצווה',
    'בת מצווה',
    'אחר',
  ];

  selectedCelebration = '';
  customCelebration = '';
  name = '';
  celebration = '';
  date = '';
  recentUpdates: CelebrationUpdateRecord[] = [];
  feedback = '';
  errorMessage = '';

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.close.emit();
  }

  ngOnInit(): void {
    try {
      const savedUpdates = localStorage.getItem('mest.celebrationUpdates');
      if (savedUpdates) {
        const parsed: unknown = JSON.parse(savedUpdates);
        if (!Array.isArray(parsed) || !parsed.every(CelebrationUpdate.isUpdateRecord)) {
          throw new Error('Saved update data has an invalid format.');
        }
        this.recentUpdates = parsed;
      }
    } catch (error) {
      this.errorMessage =
        error instanceof SyntaxError
          ? 'לא ניתן לקרוא את העדכונים השמורים. הנתונים השמורים אינם תקינים.'
          : 'לא ניתן לטעון עדכונים שמורים בדפדפן הזה.';
    }
  }

  get subject(): string {
    return this.selectedCelebration === 'אחר'
      ? this.customCelebration.trim()
      : this.selectedCelebration;
  }

  saveUpdate(): void {
    const update: CelebrationUpdateRecord = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      subject: this.subject,
      name: this.name.trim(),
      celebration: this.celebration.trim(),
      date: this.date,
    };
    const updatedHistory = [update, ...this.recentUpdates].slice(0, 40);

    try {
      localStorage.setItem('mest.celebrationUpdates', JSON.stringify(updatedHistory));
    } catch {
      this.errorMessage = 'לא ניתן לשמור את העדכון בדפדפן הזה. בדקי את הגדרות האחסון.';
      this.feedback = '';
      return;
    }

    this.recentUpdates = updatedHistory;
    this.selectedCelebration = '';
    this.customCelebration = '';
    this.name = '';
    this.celebration = '';
    this.date = '';
    this.errorMessage = '';
    this.feedback =
      'העדכון נשמר בהיסטוריה במכשיר הזה. לא נשלח מייל, כי עדיין לא מחובר לאתר שירות דיוור.';
  }

  private static isUpdateRecord(value: unknown): value is CelebrationUpdateRecord {
    if (typeof value !== 'object' || value === null) {
      return false;
    }
    const update = value as Record<string, unknown>;
    return (
      typeof update['id'] === 'string' &&
      typeof update['subject'] === 'string' &&
      typeof update['name'] === 'string' &&
      typeof update['celebration'] === 'string' &&
      typeof update['date'] === 'string'
    );
  }
}
