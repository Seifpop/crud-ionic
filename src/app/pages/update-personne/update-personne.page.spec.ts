import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePersonnePage } from './update-personne.page';

describe('UpdatePersonnePage', () => {
  let component: UpdatePersonnePage;
  let fixture: ComponentFixture<UpdatePersonnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
