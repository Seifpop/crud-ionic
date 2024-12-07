import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonnesListPage } from './personnes-list.page';

describe('PersonnesListPage', () => {
  let component: PersonnesListPage;
  let fixture: ComponentFixture<PersonnesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
