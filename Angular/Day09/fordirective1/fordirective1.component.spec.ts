import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fordirective1Component } from './fordirective1.component';

describe('Fordirective1Component', () => {
  let component: Fordirective1Component;
  let fixture: ComponentFixture<Fordirective1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fordirective1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fordirective1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
