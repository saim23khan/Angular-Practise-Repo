import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipformComponent } from './chipform.component';

describe('ChipformComponent', () => {
  let component: ChipformComponent;
  let fixture: ComponentFixture<ChipformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
