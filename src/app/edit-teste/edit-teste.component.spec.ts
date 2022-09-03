import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTesteComponent } from './edit-teste.component';

describe('EditTesteComponent', () => {
  let component: EditTesteComponent;
  let fixture: ComponentFixture<EditTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
