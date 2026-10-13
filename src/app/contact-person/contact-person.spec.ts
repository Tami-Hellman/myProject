import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactPerson } from './contact-person';

describe('ContactPerson', () => {
  let component: ContactPerson;
  let fixture: ComponentFixture<ContactPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPerson],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPerson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
