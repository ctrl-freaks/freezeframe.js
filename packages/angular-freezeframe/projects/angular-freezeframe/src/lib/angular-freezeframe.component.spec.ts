import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFreezeframeComponent } from './angular-freezeframe.component';

const src = 'http://localhost:8080/foo.gif';

@Component({
  template: `
    <angular-freezeframe>
      <img [src]="src" alt="one" />
    </angular-freezeframe>
  `,
})
class SingleChildComponent {}
@Component({
  template: `
    <angular-freezeframe>
      <img [src]="src" alt="one" />
      <img [src]="src" alt="two" />
      <img [src]="src" alt="three" />
    </angular-freezeframe>
  `,
})
class MultipleChildComponent {}

describe('AngularFreezeframe', () => {
  let component: AngularFreezeframeComponent;
  let singleChildComponent: SingleChildComponent;
  let multipleChildComponent: MultipleChildComponent;
  let fixture: ComponentFixture<AngularFreezeframeComponent>;
  let singleChildFixture: ComponentFixture<SingleChildComponent>;
  let multipleChildFixture: ComponentFixture<MultipleChildComponent>;

  beforeAll(() => {
    spyOn(window.HTMLCanvasElement.prototype, 'addEventListener')
    spyOn(window.HTMLImageElement.prototype, 'addEventListener')
  });

  describe('basic usage', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AngularFreezeframeComponent ]
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AngularFreezeframeComponent);
      component = fixture.componentInstance;
      component.src = src;
      fixture.detectChanges();
    });

    it('renders image when url is passed into src prop', () => {
      expect(component).toBeTruthy();
      const container = fixture.nativeElement.firstChild;
      const img = container.querySelector('img');
      expect(container).toHaveClass('angular-freezeframe');
      expect(img.src).toBe(src);
    });
  });

  describe('ng-content single usage', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AngularFreezeframeComponent, SingleChildComponent ]
      })
      .compileComponents();

      singleChildFixture = TestBed.createComponent(SingleChildComponent);
      singleChildComponent = singleChildFixture.componentInstance;
      singleChildFixture.detectChanges();
    });

    it('renders images when single imgs are passed as children', () => {
      expect(singleChildComponent).toBeTruthy();
      const container = singleChildFixture.nativeElement.firstChild;
      const imgs = container.querySelectorAll('img');
      expect(imgs.length).toBe(1);
    })
  });

  describe('ng-content multiple usage', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AngularFreezeframeComponent, MultipleChildComponent ]
      })
      .compileComponents();

      multipleChildFixture = TestBed.createComponent(MultipleChildComponent);
      multipleChildComponent = multipleChildFixture.componentInstance;
      multipleChildFixture.detectChanges();
    });

    it('renders images when multiple imgs are passed as children', () => {
      expect(multipleChildComponent).toBeTruthy();
      const container = multipleChildFixture.nativeElement.firstChild;
      const imgs = container.querySelectorAll('img');
      expect(imgs.length).toBe(3);
    })
  });
});
