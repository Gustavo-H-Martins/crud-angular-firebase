import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTesteComponent } from './add-teste.component';

describe('AddTesteComponent', () => {
  let component: AddTesteComponent;
  let fixture: ComponentFixture<AddTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
