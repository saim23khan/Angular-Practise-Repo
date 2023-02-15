import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFeildComponent } from './input-feild.component';

describe('InputFeildComponent', () => {
  let component: InputFeildComponent;
  let fixture: ComponentFixture<InputFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFeildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
