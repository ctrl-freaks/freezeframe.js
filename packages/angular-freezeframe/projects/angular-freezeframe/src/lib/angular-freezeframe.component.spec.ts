import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFreezeframeComponent } from './angular-freezeframe.component';

describe('AngularFreezeframeComponent', () => {
  let component: AngularFreezeframeComponent;
  let fixture: ComponentFixture<AngularFreezeframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFreezeframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFreezeframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
