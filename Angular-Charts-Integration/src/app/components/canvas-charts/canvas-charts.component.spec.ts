import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasChartsComponent } from './canvas-charts.component';

describe('CanvasChartsComponent', () => {
  let component: CanvasChartsComponent;
  let fixture: ComponentFixture<CanvasChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
