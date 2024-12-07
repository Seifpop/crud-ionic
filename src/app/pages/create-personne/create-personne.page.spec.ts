import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePersonnePage } from './create-personne.page';

describe('CreatePersonnePage', () => {
  let component: CreatePersonnePage;
  let fixture: ComponentFixture<CreatePersonnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
