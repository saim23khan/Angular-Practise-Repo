import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableChipsComponent } from './reusable-chips.component';

describe('ReusableChipsComponent', () => {
  let component: ReusableChipsComponent;
  let fixture: ComponentFixture<ReusableChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
