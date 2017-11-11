import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStripComponent } from './menu-strip.component';

describe('MenuStripComponent', () => {
  let component: MenuStripComponent;
  let fixture: ComponentFixture<MenuStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
