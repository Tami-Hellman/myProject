import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailTemlates } from './email-temlates';

describe('EmailTemlates', () => {
  let component: EmailTemlates;
  let fixture: ComponentFixture<EmailTemlates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailTemlates],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailTemlates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
