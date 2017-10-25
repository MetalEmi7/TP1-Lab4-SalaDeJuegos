import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDeColoresComponent } from './juego-de-colores.component';

describe('JuegoDeColoresComponent', () => {
  let component: JuegoDeColoresComponent;
  let fixture: ComponentFixture<JuegoDeColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoDeColoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDeColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
