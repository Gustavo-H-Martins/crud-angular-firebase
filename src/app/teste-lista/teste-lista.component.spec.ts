import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteListaComponent } from './teste-lista.component';

describe('TesteListaComponent', () => {
  let component: TesteListaComponent;
  let fixture: ComponentFixture<TesteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
