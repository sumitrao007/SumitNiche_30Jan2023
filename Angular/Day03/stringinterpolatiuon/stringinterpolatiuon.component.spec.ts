import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterpolatiuonComponent } from './stringinterpolatiuon.component';

describe('StringinterpolatiuonComponent', () => {
  let component: StringinterpolatiuonComponent;
  let fixture: ComponentFixture<StringinterpolatiuonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringinterpolatiuonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterpolatiuonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
